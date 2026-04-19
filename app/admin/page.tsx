import { createClient } from '../../lib/supabase/server';
import ExportCSVButton from './ExportCSVButton';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  const { data: chronicles, error } = await supabase
    .from('chronicles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return (
      <div className="text-red-400">
        <h2 className="text-xl font-bold mb-2">Error connecting to database</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Application Submissions</h1>
        <div className="flex items-center gap-4">
          <span className="text-white/60">{chronicles?.length || 0} Total</span>
          <ExportCSVButton data={chronicles || []} />
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden overflow-x-auto w-full">
        <table className="w-full text-left text-sm text-white/80 whitespace-nowrap">
          <thead className="bg-[#222222] text-xs uppercase text-white/50 border-b border-white/10">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Level</th>
              <th className="px-6 py-4">Goal</th>
            </tr>
          </thead>
          <tbody>
            {!chronicles || chronicles.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-white/40">
                  No applications found yet.
                </td>
              </tr>
            ) : (
              chronicles.map((entry) => (
                <tr key={entry.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-6 py-4">{new Date(entry.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 font-medium text-white">{entry.full_name}</td>
                  <td className="px-6 py-4">{entry.email}</td>
                  <td className="px-6 py-4">
                    <span className="bg-brand-blue/20 text-brand-blue px-2 py-1 rounded text-xs">
                      {entry.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">{entry.main_goal}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
