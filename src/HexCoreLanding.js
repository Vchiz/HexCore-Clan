
import React from "react";

export default function HexCoreLanding() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">HexCore Esports</h1>
        <p className="text-lg text-gray-400">نحو القمة في عالم الرياضات الإلكترونية</p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">من نحن</h2>
          <p className="text-gray-300">
            نحن HexCore، فريق إيسبورت سعودي محترف، نطمح لبناء منظومة تنافسية متكاملة تضم نخبة من اللاعبين والمدربين وصناع المحتوى، ننافس محلياً وعالمياً.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">ألعابنا</h2>
          <h3 className="text-xl font-bold mb-2">الألعاب الإلكترونية</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Valorant</li>
            <li>Fortnite</li>
            <li>League of Legends</li>
            <li>Call of Duty</li>
            <li>Overwatch</li>
            <li>Marvel Rivals</li>
            <li>FIFA</li>
            <li>PUBG</li>
            <li>Rocket League</li>
            <li>Counter-Strike</li>
            <li>Tekken</li>
            <li>Rainbow Six Siege</li>
            <li>Dota 2</li>
            <li>Apex Legends</li>
          </ul>
          <h3 className="text-xl font-bold mb-2">الألعاب الذهنية</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>الشطرنج</li>
            <li>بلوت</li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">فريقنا</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-4 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold">Fury</h3>
            <p className="text-gray-400">قائد فريق Valorant</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold">Shadow</h3>
            <p className="text-gray-400">لاعب Fortnite محترف</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold">Nova</h3>
            <p className="text-gray-400">مصمم ومحرر محتوى</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">بطولاتنا</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">HexCore Valorant Cup</h3>
            <p className="text-gray-400">بطولة تنافسية بمشاركة 16 فريقاً من النخبة. تبدأ في يونيو 2025.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">HexCore بلوت ماسترز</h3>
            <p className="text-gray-400">بطولة خاصة بالألعاب الذهنية مع جوائز قيمة. تقام في الرياض حضورياً.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 border-t border-gray-700 pt-6">
        <p>© 2025 HexCore. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
