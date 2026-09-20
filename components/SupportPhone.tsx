export default function SupportPhone() {
  const phone = "0684767112";
  return (
    <div className="mt-8 p-4 bg-gray-800/50 rounded-2xl border border-gray-700 text-center">
      <p className="text-gray-400 text-sm mb-2">📞 Piga simu kwa msaada</p>
      <a href="tel:0684767112" className="text-white font-bold text-lg">
        📞 0684767112
      </a>
      <p className="text-gray-500 text-xs mt-2">Bonyeza kupiga moja kwa moja</p>
    </div>
  );
}
