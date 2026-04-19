'use client';

import { Button } from '../../components/ui/Button';

export default function ExportCSVButton({ data }: { data: any[] }) {
  const handleExport = () => {
    if (!data || data.length === 0) return;
    
    // Get headers
    const headers = Object.keys(data[0]);
    
    // Create CSV string
    const csvRows = [];
    csvRows.push(headers.join(','));
    
    for (const row of data) {
      const values = headers.map(header => {
        let val = row[header];
        if (val === null || val === undefined) val = '';
        if (Array.isArray(val)) val = val.join('; ');
        val = String(val).replace(/"/g, '""');
        return `"${val}"`;
      });
      csvRows.push(values.join(','));
    }
    
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `chronicles_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleExport} variant="outline" className="text-white border-white/20 hover:bg-white/10">
      Export to CSV
    </Button>
  );
}
