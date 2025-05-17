import React from "react";

export default function HexCoreLanding() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <nav className="bg-gray-950 text-white px-4 py-3 sticky top-0 z-50 border-b border-gray-800 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">HexCore</div>
          <ul className="flex space-x-4 text-sm sm:text-base">
            <li><a href="#about" className="hover:text-blue-400">من نحن</a></li>
            <li><a href="#games" className="hover:text-blue-400">ألعابنا</a></li>
            <li><a href="#team" className="hover:text-blue-400">فريقنا</a></li>
            <li><a href="#tournaments" className="hover:text-blue-400">بطولاتنا</a></li>
          </ul>
        </div>
      </nav>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">HexCore Esports</h1>
        <p className="text-lg text-gray-400">نحو القمة في عالم الرياضات الإلكترونية</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-20">

        <section id="about">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">من نحن</h2>
          <p className="text-gray-300 leading-relaxed">
            HexCore هو فريق سعودي محترف في الرياضات الإلكترونية، يهدف إلى بناء منظومة تنافسية متكاملة تضم نخبة من اللاعبين، المدربين، وصناع المحتوى. نطمح إلى التميز على المستويين المحلي والعالمي.
          </p>
        </section>

        <section id="games">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">ألعابنا</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">🎮 الألعاب الإلكترونية</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Valorant</li><li>Fortnite</li><li>League of Legends</li><li>Call of Duty</li>
                <li>Overwatch</li><li>Marvel Rivals</li><li>FIFA</li><li>PUBG</li>
                <li>Rocket League</li><li>Counter-Strike</li><li>Tekken</li>
                <li>Rainbow Six Siege</li><li>Dota 2</li><li>Apex Legends</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">🧠 الألعاب الذهنية</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>الشطرنج</li>
                <li>بلوت</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2 text-center">فريقنا</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Fury</h3>
              <p className="text-gray-400">قائد فريق Valorant</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Shadow</h3>
              <p className="text-gray-400">لاعب Fortnite محترف</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Nova</h3>
              <p className="text-gray-400">مصمم ومحرر محتوى</p>
            </div>
          </div>
        </section>

        <section id="tournaments">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2 text-center">بطولاتنا</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">HexCore Valorant Cup</h3>
              <p className="text-gray-400">بطولة تنافسية بمشاركة 16 فريقاً من النخبة. تبدأ في يونيو 2025.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">HexCore بلوت ماسترز</h3>
              <p className="text-gray-400">بطولة خاصة بالألعاب الذهنية مع جوائز قيمة. تقام في الرياض حضورياً.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center text-gray-500 border-t border-gray-700 pt-6 mt-12">
        <p>© 2025 HexCore. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
