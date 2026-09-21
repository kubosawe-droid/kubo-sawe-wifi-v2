export default function SupportPhone() {
  const phone = "0684767112";
  return (
    <div className="mt-8 p-6 bg-cyan-500/10 rounded-2xl border border-cyan-400/20 text-center w-full flex flex-col items-center justify-center mx-auto">
      <p className="text-cyan-300/70 text-sm mb-2">📞 Piga simu kwa msaada</p>
      <a href="tel:0684767112" className="text-white font-bold text-2xl text-center tracking-wider">
        0684767112
      </a>
      <p className="text-gray-400 text-xs mt-3">Bonyeza kupiga moja kwa moja - KUBO SAWE WiFi</p>
    </div>
  );
}
