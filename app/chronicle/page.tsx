'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography } from '../../components/ui/Typography';
import { Button } from '../../components/ui/Button';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Card } from '../../components/ui/Card';
import { submitChronicleApplication } from './actions';

// Using basic HTML inputs.
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${props.className || ''}`}
  />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className={`w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all bg-transparent ${props.className || ''}`}
  >
    {props.children}
  </select>
);

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={`w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${props.className || ''}`}
  />
);

export default function ChronicleFormPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    countryCity: '',
    // Step 2
    source: '',
    referralSource: '',
    inCommunity: '',
    communityList: '',
    // Step 3
    level: '',
    markets: [] as string[],
    // duration: '',
    // Step 4
    whyJoin: '',
    mainGoal: '',
    timeCommitment: '',
    // personality: '',
    // Step 5
    mentorInterest: '',
    privateGroup: '',
    sharePublicly: '',
  });

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleCheckbox = (market: string) => {
    setFormData(prev => {
      const exists = prev.markets.includes(market);
      if (exists) {
        return { ...prev, markets: prev.markets.filter(m => m !== market) };
      }
      return { ...prev, markets: [...prev.markets, market] };
    });
  };

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitChronicleApplication(formData);
    
    setIsSubmitting(false);

    if (result.success) {
      router.push(`/chronicle/thank-you?name=${encodeURIComponent(formData.fullName)}`);
    } else {
      setSubmitError(result.error || 'An error occurred during submission.');
    }
  };

  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="min-h-screen bg-brand-dark/[0.01] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <Typography variant="H2" className="mb-2">Your Chronicle Application</Typography>
          <Typography variant="Body" className="text-brand-dark/60">
            Step {step} of {totalSteps}
          </Typography>
        </div>

        <Card className="p-6 md:p-10 shadow-lg shadow-brand-dark/[0.02]">
          <div className="mb-8">
            <ProgressBar progress={progress} />
          </div>

          <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <Typography variant="H3" className="mb-6">Basic Information</Typography>

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">Full Name</Typography>
                  <Input required placeholder="Full Name" value={formData.fullName} onChange={e => updateForm('fullName', e.target.value)} />
                </div>

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">Email Address</Typography>
                  <Input required type="email" placeholder="victor@example.com" value={formData.email} onChange={e => updateForm('email', e.target.value)} />
                </div>

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">Phone Number / WhatsApp</Typography>
                  <Input required type="tel" placeholder="" value={formData.phone} onChange={e => updateForm('phone', e.target.value)} />
                </div>

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">Country / City</Typography>
                  <Input required placeholder="Nairobi, Kenya" value={formData.countryCity} onChange={e => updateForm('countryCity', e.target.value)} />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <Typography variant="H3" className="mb-6">Source & Community</Typography>

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">How did you hear about Cheuo-Villa?</Typography>
                  <Select required value={formData.source} onChange={e => updateForm('source', e.target.value)}>
                    <option value="" disabled>Select an option</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Search">Search</option>
                    <option value="Other">Other</option>
                  </Select>
                </div>

                {formData.source === 'Referral' && (
                  <div>
                    <Typography variant="Label" className="block mb-2 text-brand-dark/70">Who referred you?</Typography>
                    <Input required placeholder="Name of referrer" value={formData.referralSource} onChange={e => updateForm('referralSource', e.target.value)} />
                  </div>
                )}

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">Are you part of any crypto/trading communities?</Typography>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="inCommunity" required checked={formData.inCommunity === 'Yes'} onChange={() => updateForm('inCommunity', 'Yes')} className="w-5 h-5 accent-brand-blue" />
                      <span className="font-medium">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="inCommunity" required checked={formData.inCommunity === 'No'} onChange={() => updateForm('inCommunity', 'No')} className="w-5 h-5 accent-brand-blue" />
                      <span className="font-medium">No</span>
                    </label>
                  </div>
                </div>

                {formData.inCommunity === 'Yes' && (
                  <div>
                    <Typography variant="Label" className="block mb-2 text-brand-dark/70">Please list them</Typography>
                    <Textarea required placeholder="e.g., local Discord group, Binance Africa" value={formData.communityList} onChange={e => updateForm('communityList', e.target.value)} rows={3} />
                  </div>
                )}
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <Typography variant="H3" className="mb-6">Onboarding Category</Typography>

                <div>
                  <Typography variant="Label" className="block mb-3 text-brand-dark/70">Trading Level</Typography>
                  <div className="space-y-3">
                    {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                      <label key={lvl} className={`block p-4 rounded-xl border cursor-pointer transition-all ${formData.level === lvl ? 'border-brand-blue bg-brand-blue/5' : 'border-brand-dark/10 hover:border-brand-dark/30'}`}>
                        <div className="flex items-center gap-3">
                          <input type="radio" required name="level" checked={formData.level === lvl} onChange={() => updateForm('level', lvl)} className="w-5 h-5 accent-brand-blue" />
                          <span className="font-medium">{lvl}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Typography variant="Label" className="block mb-3 text-brand-dark/70">Markets Traded</Typography>
                  <div className="space-y-3">
                    {['DeFi/Degen/Memes', 'Futures', 'NFT'].map(mkt => (
                      <label key={mkt} className={`block p-4 rounded-xl border cursor-pointer transition-all ${formData.markets.includes(mkt) ? 'border-brand-blue bg-brand-blue/5' : 'border-brand-dark/10 hover:border-brand-dark/30'}`}>
                        <div className="flex items-center gap-3">
                          <input type="checkbox" checked={formData.markets.includes(mkt)} onChange={() => handleCheckbox(mkt)} className="w-5 h-5 accent-brand-blue rounded" />
                          <span className="font-medium">{mkt}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* <div>
                  <Typography variant="Label" className="block mb-3 text-brand-dark/70">Trading Duration</Typography>
                  <Select required value={formData.duration} onChange={e => updateForm('duration', e.target.value)}>
                    <option value="" disabled>Select duration</option>
                    <option value="0–3 months">0–3 months</option>
                    <option value="3–12 months">3–12 months</option>
                    <option value="1–2 years">1–2 years</option>
                    <option value="2+ years">2+ years</option>
                  </Select>
                </div> */}
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <Typography variant="H3" className="mb-6">Commitment & Goals</Typography>

                <div>
                  <Typography variant="Label" className="block mb-2 text-brand-dark/70">Why do you want to join?</Typography>
                  <Textarea required placeholder="Tell us your motivation..." value={formData.whyJoin} onChange={e => updateForm('whyJoin', e.target.value)} rows={4} />
                </div>

                <div>
                  <Typography variant="Label" className="block mb-3 text-brand-dark/70">Main Goal</Typography>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Learn basics', 'Become profitable', 'Side income', 'Full-time trading'].map(goal => (
                      <label key={goal} className={`block p-4 rounded-xl border cursor-pointer transition-all ${formData.mainGoal === goal ? 'border-brand-blue bg-brand-blue/5' : 'border-brand-dark/10 hover:border-brand-dark/30'}`}>
                        <div className="flex items-center gap-3">
                          <input type="radio" required name="mainGoal" checked={formData.mainGoal === goal} onChange={() => updateForm('mainGoal', goal)} className="w-5 h-5 accent-brand-blue" />
                          <span className="font-medium">{goal}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Typography variant="Label" className="block mb-3 text-brand-dark/70">Weekly Time Commitment</Typography>
                  <div className="space-y-3">
                    {['Less than 3 days/week', '3–4 days/week'].map(time => (
                      <label key={time} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" required name="timeCommitment" checked={formData.timeCommitment === time} onChange={() => updateForm('timeCommitment', time)} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* <div>
                  <Typography variant="Label" className="block mb-3 text-brand-dark/70">What describes you best?</Typography>
                  <Select required value={formData.personality} onChange={e => updateForm('personality', e.target.value)}>
                    <option value="" disabled>Select option</option>
                    <option value="Patient and disciplined">Patient and disciplined</option>
                    <option value="Emotional but learning">Emotional but learning</option>
                    <option value="Impulsive">Impulsive</option>
                  </Select>
                </div> */}
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="space-y-6 animate-fade-in">
                <Typography variant="H3" className="mb-6">Add-Ons & Finalization</Typography>

                <div className="p-6 bg-brand-dark/[0.02] rounded-2xl space-y-8">
                  <div>
                    <Typography variant="Label" className="block mb-3 text-brand-dark/80">Interested in becoming a mentor in future cohorts?</Typography>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mentorInterest" required checked={formData.mentorInterest === 'Yes'} onChange={() => updateForm('mentorInterest', 'Yes')} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mentorInterest" required checked={formData.mentorInterest === 'No'} onChange={() => updateForm('mentorInterest', 'No')} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Typography variant="Label" className="block mb-3 text-brand-dark/80">Interested in joining an advanced/private trading group?</Typography>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="privateGroup" required checked={formData.privateGroup === 'Yes'} onChange={() => updateForm('privateGroup', 'Yes')} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="privateGroup" required checked={formData.privateGroup === 'No'} onChange={() => updateForm('privateGroup', 'No')} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Typography variant="Label" className="block mb-3 text-brand-dark/80">Open to sharing your journey publicly on X/Twitter?</Typography>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="sharePublicly" required checked={formData.sharePublicly === 'Yes'} onChange={() => updateForm('sharePublicly', 'Yes')} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="sharePublicly" required checked={formData.sharePublicly === 'No'} onChange={() => updateForm('sharePublicly', 'No')} className="w-5 h-5 accent-brand-blue" />
                        <span className="font-medium">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Nav Buttons */}
            <div className="mt-10 pt-6 border-t border-brand-dark/10 flex items-center justify-between">
              {step > 1 ? (
                <Button type="button" variant="ghost" onClick={handleBack} className="px-6">
                  Back
                </Button>
              ) : (
                <div /> // Placeholder to keep Next button on the right
              )}

              {step < totalSteps ? (
                <Button type="submit" variant="primary" className="px-8 shadow-md">
                  Next Step
                </Button>
              ) : (
                <div className="flex flex-col items-end">
                  <Button type="submit" variant="primary" disabled={isSubmitting} className="px-8 bg-brand-green border-none text-white hover:bg-brand-green/90 shadow-lg shadow-brand-green/20 disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : 'Start your CHRONICLE'}
                  </Button>
                  {submitError && <span className="text-red-500 text-sm mt-2">{submitError}</span>}
                </div>
              )}
            </div>

          </form>
        </Card>
      </div>
    </div>
  );
}
