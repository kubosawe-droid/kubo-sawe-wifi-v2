export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* NAMBA YAKO MBELE - KAMA ULVYOTAKA */}
      <div className="bg-black border-b border-cyan-400/50 text-center py-3 font-black tracking-wider text-cyan-400 text-[15px]">
        📞 PIGA KWA MSAADA: 0684767112
      </div>

      {/* LIVE Database */}
      <div className="bg-[#0a3a2f] border-b border-emerald-500/20 text-emerald-300 text-center py-2 px-3 text-[13px] font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="bg-emerald-500 text-black rounded px-1.5 text-[11px]">✓</span>
          LIVE Database - Watu wote wanaona mabadiliko papo hapo (Supabase Connected)
        </span>
      </div>

      {/* HEADER */}
      <header className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <span className="text-black text-xl">📶</span>
          </div>
          <div className="leading-tight">
            <div className="font-black text-[16px]">KUBO SAWE</div>
            <div className="text-[11px] tracking-[0.2em] text-slate-400">INTERNET SYSTEM v2 • BELOVED</div>
          </div>
        </div>
        <a href="/admin" className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm">Admin</a>
      </header>

      {/* MAIN CARD - KAMA KWENYE PICHA YAKO */}
      <div className="mx-4 mt-2 rounded-[28px] bg-[#1a233e] border border-slate-700/50 p-6 text-center shadow-2xl">
        <div className="w-20 h-20 mx-auto rounded-[20px] bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mb-5">
          <span className="text-3xl text-black">📶</span>
        </div>

        <h1 className="text-3xl font-black leading-tight">
          Karibu<br/>KUBO SAWE WiFi
        </h1>

        <p className="text-slate-400 text-[15px] mt-4 leading-relaxed">
          Mtandao wa kasi, malipo ya papo hapo kwa mitandao YOTE: M-Pesa, Tigo, Airtel, HaloPesa, Azam, TTCL, CRDB, NMB, Mixx by Yas. Chagua kifurushi uunganishwe moja kwa moja.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-6 text-left">
          <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700">
            <div className="text-emerald-400">⚡</div>
            <div className="text-[11px] text-slate-400 mt-1">KASI</div>
            <div className="font-bold text-[14px]">Hadi 100Mbps</div>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700">
            <div className="text-cyan-400">⏱️</div>
            <div className="text-[11px] text-slate-400 mt-1">MUDA</div>
            <div className="font-bold text-[14px]">Masaa 6 - Mwezi</div>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700">
            <div className="text-yellow-400">💳</div>
            <div className="text-[11px] text-slate-400 mt-1">MALIPO</div>
            <div className="font-bold text-[14px]">Mitandao 9</div>
          </div>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-black py-4 rounded-full text-[16px]">
          Anza - Chagua Kifurushi ↗
        </button>

        <div className="text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-2">
          🛡️ Salama & Imethibitishwa • RESTORED 100% + Supabase LIVE
        </div>
      </div>

      {/* MITANDAO 9 */}
      <div className="px-4 mt-6 pb-10">
        <div className="text-[11px] tracking-widest text-slate-500 font-bold mb-3">MITANDAO YOTE 9 INAYOKUBALIWA</div>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            ['M-Pesa','Vodacom'],['Tigo Pesa','Tigo'],['Airtel Money','Airtel'],
            ['HaloPesa','Halotel'],['Azam Pesa','Azam'],['TTCL Pesa','TTCL'],
            ['CRDB','Benki'],['NMB','Benki'],['Mixx','Yas']
          ].map(([a,b])=>(
            <div key={a} className="bg-[#1a233e] border border-slate-700/50 rounded-2xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">{a.slice(0,4)}</div>
              <div><div className="font-bold text-[14px]">{a}</div><div className="text-[11px] text-slate-400">{b}</div></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
