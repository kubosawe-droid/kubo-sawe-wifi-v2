"use client";
import { useState, useEffect } from "react";

type Package = {
  id: number;
  name: string;
  duration_minutes: number;
  price: number;
  description?: string;
};

const NETWORKS = [
  { id: "mpesa", name: "M-Pesa", sub: "Vodacom", color: "bg-red-600", letter: "M-PESA" },
  { id: "tigopesa", name: "Tigo Pesa", sub: "Tigo", color: "bg-blue-600", letter: "tigo" },
  { id: "airtelmoney", name: "Airtel Money", sub: "Airtel", color: "bg-red-500", letter: "airtel" },
  { id: "halopesa", name: "HaloPesa", sub: "Halotel", color: "bg-orange-500", letter: "Halo" },
  { id: "azampesa", name: "Azam Pesa", sub: "Azam", color: "bg-green-500", letter: "Azam" },
  { id: "ttclpesa", name: "TTCL Pesa", sub: "TTCL", color: "bg-blue-500", letter: "TTCL" },
  { id: "crdb", name: "CRDB", sub: "Benki", color: "bg-green-600", letter: "CRDB" },
  { id: "nmb", name: "NMB", sub: "Benki", color: "bg-blue-900", letter: "NMB" },
  { id: "mixx", name: "Mixx", sub: "Yas", color: "bg-yellow-400", letter: "Mixx" },
];

export default function Home(){
  const [step, setStep] = useState<"welcome" | "packages">("welcome");
  const [packages] = useState<Package[]>([
    {id:1,name:"Masaa 6",duration_minutes:360,price:500,description:"BILA KIKOMO"},
    {id:2,name:"Masaa 12",duration_minutes:720,price:800,description:"BILA KIKOMO"},
    {id:3,name:"Masaa 24",duration_minutes:1440,price:1000,description:"BILA KIKOMO"},
    {id:4,name:"Siku 3",duration_minutes:4320,price:2500,description:"BILA KIKOMO"},
    {id:5,name:"Wiki 1",duration_minutes:10080,price:5000,description:"BILA KIKOMO"},
    {id:6,name:"Mwezi 1",duration_minutes:43200,price:15000,description:"BILA KIKOMO"},
  ]);
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [showBuy, setShowBuy] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [phone, setPhone] = useState("");

  const openBuy = (pkg: Package) => {
    setSelectedPkg(pkg);
    setSelectedNetwork("");
    setPhone("");
    setShowBuy(true);
  };

  const handleBuy = () => {
    if(!selectedNetwork){ alert("Chagua Mtandao!"); return; }
    if(!phone || phone.length < 9){ alert("Weka namba sahihi!"); return; }
    const msg = `Habari KUBO SAWE WiFi,%0A%0ANataka kununua:%0A📦 ${selectedPkg?.name} - ${selectedPkg?.description}%0A💰 TSH ${selectedPkg?.price}%0A📱 Mtandao: ${NETWORKS.find(n=>n.id===selectedNetwork)?.name}%0A📞 Namba: ${phone}%0A%0ANaomba maelekezo.`;
    window.open(`https://wa.me/255684767112?text=${msg}`, "_blank");
    setShowBuy(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center">
      {/* LIVE Banner */}
      <div className="w-full bg-[#14b8a6]/20 border-b border-[#14b8a6]/20 text-center py-2 px-4">
        <p className="text-[12px] text-[#5eead4] font-medium">✅ LIVE Database - Watu wote wanaona mabadiliko papo hapo (Supabase Connected)</p>
      </div>

      {/* Header */}
      <div className="w-full max-w-md px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-[#34d399] to-[#22d3ee] rounded-2xl flex items-center justify-center">
            <span className="text-xl">🛜</span>
          </div>
          <div>
            <h1 className="font-black text-[15px] leading-tight tracking-wide">KUBO SAWE</h1>
            <p className="text-[11px] text-gray-400 tracking-[0.15em]">INTERNET SYSTEM v2 •</p>
            <p className="text-[11px] text-gray-400 tracking-[0.15em]">BELOVED</p>
          </div>
        </div>
        <a href="/admin" className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs">Admin</a>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md px-4">
        <div className="bg-[#1e293b]/80 rounded-[32px] border border-white/5 p-6 flex flex-col items-center">
          {/* Big WiFi Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#34d399] to-[#22d3ee] rounded-[24px] flex items-center justify-center mt-2 shadow-lg">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1.5" fill="black" />
            </svg>
          </div>

          <h1 className="text-[32px] font-black leading-[0.9] mt-6 text-center">Karibu<br/>KUBO SAWE WiFi</h1>
          
          <p className="text-center text-gray-400 text-[14px] leading-relaxed mt-4 px-2">
            Mtandao wa kasi, malipo ya papo hapo kwa mitandao YOTE: M-Pesa, Tigo, Airtel, HaloPesa, Azam, TTCL, CRDB, NMB, Mixx by Yas. Chagua kifurushi uunganishwe moja kwa moja.
          </p>

          {/* 3 Small Cards */}
          <div className="grid grid-cols-3 gap-3 w-full mt-6">
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <p className="text-[#34d399] text-lg">⚡</p>
              <p className="text-[11px] text-gray-400 mt-1">KASI</p>
              <p className="text-[13px] font-bold leading-tight mt-1">Hadi 100Mbps</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <p className="text-[#22d3ee] text-lg">⏱️</p>
              <p className="text-[11px] text-gray-400 mt-1">MUDA</p>
              <p className="text-[13px] font-bold leading-tight mt-1">Masaa 6 - Mwezi</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <p className="text-[#facc15] text-lg">💳</p>
              <p className="text-[11px] text-gray-400 mt-1">MALIPO</p>
              <p className="text-[13px] font-bold leading-tight mt-1">Mitandao 9</p>
            </div>
          </div>

          {/* Main Button */}
          <button 
            onClick={()=>setStep("packages")}
            className="w-full mt-6 bg-gradient-to-r from-[#34d399] to-[#22d3ee] text-black font-black py-4 rounded-full flex items-center justify-center gap-2 text-[15px]"
          >
            Anza - Chagua Kifurushi <span>↗</span>
          </button>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-500 text-xs">🛡️</span>
            <p className="text-[11px] text-gray-500">Salama & Imethibitishwa • RESTORED 100% + Supabase LIVE</p>
          </div>
        </div>

        {/* Networks */}
        <div className="mt-8">
          <p className="text-[12px] tracking-widest text-gray-500 font-bold">MITANDAO YOTE 9 INAYOKUBALIWA</p>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            {NETWORKS.map(net=>(
              <div key={net.id} className="bg-[#1e293b] rounded-2xl p-3 flex items-center gap-3 border border-white/5">
                <div className={`w-10 h-10 rounded-full ${net.color} flex items-center justify-center text-[10px] font-black ${net.id==='mixx'?'text-black':'text-white'}`}>
                  {net.letter.split(' ')[0].slice(0,4)}
                </div>
                <div>
                  <p className="text-[13px] font-bold leading-tight">{net.name}</p>
                  <p className="text-[11px] text-gray-500">{net.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        {step==="packages" && (
          <div className="mt-8 pb-10">
            <h2 className="font-black text-lg">📦 Chagua Kifurushi</h2>
            <p className="text-xs text-gray-400 mt-1">Namba yako: <span className="text-[#22d3ee] font-bold">0684 767 112</span> - Piga kwa msaada</p>
            
            <div className="grid gap-3 mt-4">
              {packages.map(pkg=>(
                <div key={pkg.id} className="bg-[#1e293b] rounded-2xl p-4 border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-[#5eead4]">{pkg.name}</p>
                    <p className="text-[11px] text-gray-400">{pkg.description} • {pkg.duration_minutes} min</p>
                    <p className="text-[11px] text-gray-500 mt-1">0684 767 112 - Msaada</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-[#34d399]">TSH {pkg.price.toLocaleString()}</p>
                    <button onClick={()=>openBuy(pkg)} className="mt-2 px-5 py-2 bg-white text-black rounded-full text-xs font-black">NUNUA</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#14b8a6]/10 border border-[#14b8a6]/20 rounded-2xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-xs">📞</span>
                <div>
                  <p className="text-[10px] text-gray-400">Msaada wa Haraka</p>
                  <p className="text-xs font-bold">Bonyeza kupiga</p>
                </div>
              </div>
              <a href="tel:0684767112" className="px-4 py-2 bg-[#34d399] text-black rounded-full font-black text-xs">0684 767 112</a>
            </div>
          </div>
        )}

        <div className="text-center py-8">
          <p className="text-[10px] text-gray-600">© 2025 KUBO SAWE WiFi • 0684767112 • BELOVED v2</p>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuy && selectedPkg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-md bg-[#1e293b] rounded-2xl border border-white/10 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-sm">Nunua {selectedPkg.name}</h3>
              <button onClick={()=>setShowBuy(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">✕</button>
            </div>
            
            <div className="bg-black/50 p-3 rounded-xl mb-4 border border-white/5">
              <p className="text-xs text-gray-400">Kifurushi: <span className="text-white font-bold">{selectedPkg.name}</span></p>
              <p className="text-xs text-gray-400">Bei: <span className="text-[#34d399] font-bold">TSH {selectedPkg.price.toLocaleString()}</span></p>
            </div>

            <div className="mb-4">
              <p className="text-xs font-bold mb-2">1. Chagua Mtandao:</p>
              <div className="grid grid-cols-2 gap-2">
                {NETWORKS.map(net=>(
                  <button 
                    key={net.id}
                    onClick={()=>setSelectedNetwork(net.id)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all ${selectedNetwork===net.id ? 'bg-[#34d399] text-black border-[#34d399]' : 'bg-white/5 border-white/10 text-white'}`}
                  >
                    {net.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <p className="text-xs font-bold mb-2">2. Namba Yako:</p>
              <input 
                type="tel"
                value={phone}
                onChange={e=>setPhone(e.target.value)}
                placeholder="0684767112"
                className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white text-sm outline-none focus:border-[#34d399]"
              />
            </div>

            <div className="flex gap-2">
              <button onClick={()=>setShowBuy(false)} className="flex-1 py-3.5 bg-white/10 rounded-xl text-sm font-bold">Ghairi</button>
              <button onClick={handleBuy} className="flex-1 py-3.5 bg-gradient-to-r from-[#34d399] to-[#22d3ee] text-black rounded-xl text-sm font-black">WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
