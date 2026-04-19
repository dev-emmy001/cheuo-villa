'use server';

import { createClient } from '../../lib/supabase/server';

export async function submitChronicleApplication(formData: any) {
  try {
    const supabase = await createClient();
    
    const { error } = await supabase
      .from('chronicles')
      .insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country_city: formData.countryCity,
          source: formData.source,
          referral_source: formData.referralSource || null,
          in_community: formData.inCommunity,
          community_list: formData.communityList || null,
          level: formData.level,
          markets: formData.markets,
          why_join: formData.whyJoin,
          main_goal: formData.mainGoal,
          time_commitment: formData.timeCommitment,
          mentor_interest: formData.mentorInterest,
          private_group: formData.privateGroup,
          share_publicly: formData.sharePublicly
        }
      ]);

    if (error) {
      console.error('Error submitting application:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return { success: false, error: error.message || 'An unexpected error occurred' };
  }
}
