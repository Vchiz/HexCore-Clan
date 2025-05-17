import React from "react";

export default function HexCoreLanding() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <nav className="bg-gray-950 text-white px-4 py-3 sticky top-0 z-50 border-b border-gray-800 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/hexcore-logo.png" alt="HexCore Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold tracking-wide">HexCore</span>
          </div>
          <ul className="flex space-x-4 text-sm sm:text-base">
            <li><a href="#about" className="hover:text-blue-400">من نحن</a></li>
            <li><a href="#games" className="hover:text-blue-400">ألعابنا</a></li>
            <li><a href="#team" className="hover:text-blue-400">فريقنا</a></li>
            <li><a href="#tournaments" className="hover:text-blue-400">بطولاتنا</a></li>
            <li><a href="#news" className="hover:text-blue-400">الأخبار</a></li>
            <li><a href="#store" className="hover:text-blue-400">المتجر</a></li>
            <li><a href="#contact" className="hover:text-blue-400">تواصل</a></li>
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

        <section id="news">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">📢 الأخبار والمباريات القادمة</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-xl font-bold">📅 HexCore يشارك في دوري PUBG السعودية</h3>
              <p className="text-sm text-gray-400">تاريخ الحدث: 10 يونيو 2025</p>
              <p>يستعد فريق HexCore للمشاركة في دوري PUBG وسط منافسة شرسة من أبرز الفرق المحلية.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">🆕 انضمام لاعب جديد إلى فريق Valorant</h3>
              <p className="text-sm text-gray-400">تاريخ النشر: 4 مايو 2025</p>
              <p>يسرنا الإعلان عن انضمام اللاعب Blaze إلى فريق Valorant، ليعزز قوة الفريق في البطولات القادمة.</p>
            </div>
          </div>
        </section>

        <section id="store">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">🛍️ متجر HexCore</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-4 rounded-xl shadow text-center">
              <img src="https://via.placeholder.com/150" alt="تيشيرت HexCore" className="mx-auto mb-2 rounded" />
              <h3 className="text-xl font-bold">تيشيرت HexCore</h3>
              <p className="text-gray-400">بسعر 99 ريال</p>
              <button className="mt-2 px-4 py-1 bg-white text-black rounded hover:bg-gray-300">اشترِ الآن</button>
            </div>
            <div className="bg-gray-900 p-4 rounded-xl shadow text-center">
              <img src="https://via.placeholder.com/150
