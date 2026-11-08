/* Tabligh section — Roman + Urdu.
   Block types:
   ["h", ro, ur]                 heading
   ["p", ro, ur]                 paragraph
   ["l", [[ro, ur, ref?], ...]]  list (ref optional)
   ["v", "s:a", ro, ur]          Quran ayat (Arabic text comes from the app's Quran data)
   ["q", ar, ro, ur, ref]        hadees (ar may be "")
   ["n", ro, ur]                 note
*/
window.TABLIGH = [

/* ===================== 1. CHHE SIFAAT ===================== */
{id:"sifaat", icon:"۶", ro:"Chhe Sifaat", ur:"چھ صفات", sro:"Har sifat ka maqsad, fazilat aur hasil karne ka tareeqa", sur:"ہر صفت کا مقصد، فضیلت اور حاصل کرنے کا طریقہ", ch:[

{ro:"1. Kalima-e-Tayyiba", ur:"١۔ کلمۂ طیبہ", b:[
 ["q","لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُولُ اللّٰهِ","La ilaha illallahu Muhammadur Rasulullah — Allah ke siwa koi ma'bood nahi, Muhammad ﷺ Allah ke Rasool hain.","اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔",""],
 ["h","Maqsad","مقصد"],
 ["p","La ilaha illallah ka maqsad: aankhon se nazar aane wali cheezon (maal, mulk, ohda, asbaab) ka yaqeen dil se nikal jaaye aur Allah ki zaat ka yaqeen dil mein aa jaaye — ki karne wali zaat sirf Allah ki hai; makhlooq se Allah ke hukm ke baghair kuch nahi hota, aur Allah sab kuch makhlooq ke baghair kar sakte hain.","لا الٰہ الا اللہ کا مقصد: آنکھوں سے نظر آنے والی چیزوں (مال، ملک، عہدہ، اسباب) کا یقین دل سے نکل جائے اور اللہ کی ذات کا یقین دل میں آ جائے — کہ کرنے والی ذات صرف اللہ کی ہے؛ مخلوق سے اللہ کے حکم کے بغیر کچھ نہیں ہوتا، اور اللہ سب کچھ مخلوق کے بغیر کر سکتے ہیں۔"],
 ["p","Muhammadur Rasulullah ka maqsad: dunya aur aakhirat ki kamyabi sirf Nabi ﷺ ke mubarak tareeqon mein hai, aur ghairon ke tareeqon mein dono jahan ki nakaami hai — yeh yaqeen dil mein aa jaaye.","محمد رسول اللہ کا مقصد: دنیا اور آخرت کی کامیابی صرف نبی ﷺ کے مبارک طریقوں میں ہے، اور غیروں کے طریقوں میں دونوں جہاں کی ناکامی ہے — یہ یقین دل میں آ جائے۔"],
 ["h","Fazilat","فضیلت"],
 ["q","أَفْضَلُ الذِّكْرِ لَا إِلٰهَ إِلَّا اللّٰهُ","Nabi ﷺ ne farmaya: sabse afzal zikr La ilaha illallah hai.","نبی ﷺ نے فرمایا: سب سے افضل ذکر لا الٰہ الا اللہ ہے۔","Tirmidhi, Ibn Majah"],
 ["q","مَنْ كَانَ آخِرُ كَلَامِهِ لَا إِلٰهَ إِلَّا اللّٰهُ دَخَلَ الْجَنَّةَ","Jis ka aakhri kalaam La ilaha illallah ho, woh jannat mein daakhil hoga.","جس کا آخری کلام لا الٰہ الا اللہ ہو، وہ جنت میں داخل ہوگا۔","Abu Dawood"],
 ["q","","Apne imaan ko taaza karte raho. Sahaba ne poocha: kaise? Farmaya: La ilaha illallah kasrat se kaha karo.","اپنے ایمان کو تازہ کرتے رہو۔ صحابہ نے پوچھا: کیسے؟ فرمایا: لا الٰہ الا اللہ کثرت سے کہا کرو۔","Musnad Ahmad"],
 ["h","Hasil karne ka tareeqa","حاصل کرنے کا طریقہ"],
 ["l",[
  ["Is kalime ki dawat dena — Allah ki azmat, qudrat aur ne'maton ka tazkira karna, khud bhi aur doosron ko bhi.","اس کلمے کی دعوت دینا — اللہ کی عظمت، قدرت اور نعمتوں کا تذکرہ کرنا، خود بھی اور دوسروں کو بھی۔"],
  ["Tanhaai mein baith kar dhyan se is kalime ki mashq karna.","تنہائی میں بیٹھ کر دھیان سے اس کلمے کی مشق کرنا۔"],
  ["Allah se ro ro kar is yaqeen ki haqeeqat maangna.","اللہ سے رو رو کر اس یقین کی حقیقت مانگنا۔"],
  ["Har kaam se pehle dekhna ki Allah ka hukm kya hai aur Nabi ﷺ ka tareeqa kya hai.","ہر کام سے پہلے دیکھنا کہ اللہ کا حکم کیا ہے اور نبی ﷺ کا طریقہ کیا ہے۔"]
 ]]
]},

{ro:"2. Namaz (Khushu-Khuzu wali)", ur:"٢۔ نماز (خشوع و خضوع والی)", b:[
 ["h","Maqsad","مقصد"],
 ["p","Jo yaqeen kalime se dil mein aaye, usko amal mein laane ka sabse bada zariya namaz hai. Maqsad yeh hai ki namaz wali sifat paida ho — jaise namaz mein Allah ke hukm aur Nabi ﷺ ke tareeqe par hain, waise hi namaz ke baahar bhi poori zindagi Allah ke hukm par aa jaaye, aur Allah se seedha lene ka yaqeen ban jaaye.","جو یقین کلمے سے دل میں آئے، اس کو عمل میں لانے کا سب سے بڑا ذریعہ نماز ہے۔ مقصد یہ ہے کہ نماز والی صفت پیدا ہو — جیسے نماز میں اللہ کے حکم اور نبی ﷺ کے طریقے پر ہیں، ویسے ہی نماز کے باہر بھی پوری زندگی اللہ کے حکم پر آ جائے، اور اللہ سے سیدھا لینے کا یقین بن جائے۔"],
 ["h","Fazilat","فضیلت"],
 ["v","29:45","… Beshak namaz behayaai aur buri baaton se rokti hai.","… بے شک نماز بے حیائی اور بری باتوں سے روکتی ہے۔"],
 ["q","","Batao, agar tum mein se kisi ke darwaze par nehar ho aur woh roz paanch baar usmein nahaye, kya uske jism par kuch mail bachega? Sahaba ne kaha: nahi. Farmaya: yahi misaal paanch namazon ki hai, Allah inke zariye gunahon ko mita deta hai.","بتاؤ، اگر تم میں سے کسی کے دروازے پر نہر ہو اور وہ روز پانچ بار اس میں نہائے، کیا اس کے جسم پر کچھ میل بچے گا؟ صحابہ نے کہا: نہیں۔ فرمایا: یہی مثال پانچ نمازوں کی ہے، اللہ ان کے ذریعے گناہوں کو مٹا دیتا ہے۔","Sahih Bukhari, Sahih Muslim"],
 ["q","","Qayamat ke din bande se sabse pehle namaz ka hisaab liya jaayega.","قیامت کے دن بندے سے سب سے پہلے نماز کا حساب لیا جائے گا۔","Tirmidhi, Nasai"],
 ["h","Hasil karne ka tareeqa","حاصل کرنے کا طریقہ"],
 ["l",[
  ["Namaz ki dawat dena aur namaz ke fazail ka muzakara karna.","نماز کی دعوت دینا اور نماز کے فضائل کا مذاکرہ کرنا۔"],
  ["Namaz ke masail kisi aalim se seekhna — wuzu, qirat, rukoo-sujood ka sahi tareeqa.","نماز کے مسائل کسی عالم سے سیکھنا — وضو، قراءت، رکوع و سجود کا صحیح طریقہ۔"],
  ["Ahtimam se wuzu karna, takbeer-e-oola ke saath jamaat se namaz padhna.","اہتمام سے وضو کرنا، تکبیرِ اولیٰ کے ساتھ جماعت سے نماز پڑھنا۔"],
  ["Namaz mein dhyan rakhna ki main Allah ke saamne khada hoon; nafil namazon (Ishraq, Chasht, Awwabeen, Tahajjud) ki mashq karna.","نماز میں دھیان رکھنا کہ میں اللہ کے سامنے کھڑا ہوں؛ نفل نمازوں (اشراق، چاشت، اوابین، تہجد) کی مشق کرنا۔"],
  ["Allah se khushu-khuzu wali namaz ki dua maangna.","اللہ سے خشوع و خضوع والی نماز کی دعا مانگنا۔"]
 ]]
]},

{ro:"3. Ilm o Zikr", ur:"٣۔ علم و ذکر", b:[
 ["h","Ilm ka maqsad","علم کا مقصد"],
 ["p","Har haal mein Allah ka hukm kya hai, yeh maloom karna — taaki har waqt Allah ke hukm par chalna aasaan ho. Ilm do tarah ka: fazail ka ilm (shauq paida karne ke liye) aur masail ka ilm (sahi amal ke liye).","ہر حال میں اللہ کا حکم کیا ہے، یہ معلوم کرنا — تاکہ ہر وقت اللہ کے حکم پر چلنا آسان ہو۔ علم دو طرح کا: فضائل کا علم (شوق پیدا کرنے کے لیے) اور مسائل کا علم (صحیح عمل کے لیے)۔"],
 ["q","مَنْ يُرِدِ اللّٰهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ","Allah jis ke saath bhalaai ka iraada karta hai, use deen ki samajh ata farmata hai.","اللہ جس کے ساتھ بھلائی کا ارادہ کرتا ہے، اسے دین کی سمجھ عطا فرماتا ہے۔","Sahih Bukhari, Sahih Muslim"],
 ["q","","Jo shakhs ilm talab karne ke raaste par chale, Allah uske liye jannat ka raasta aasaan kar deta hai.","جو شخص علم طلب کرنے کے راستے پر چلے، اللہ اس کے لیے جنت کا راستہ آسان کر دیتا ہے۔","Sahih Muslim"],
 ["h","Zikr ka maqsad","ذکر کا مقصد"],
 ["p","Har haal mein Allah ka dhyan aur Allah ki yaad dil mein rahe — dil ki ghaflat door ho aur har kaam Allah ke dhyan ke saath ho.","ہر حال میں اللہ کا دھیان اور اللہ کی یاد دل میں رہے — دل کی غفلت دور ہو اور ہر کام اللہ کے دھیان کے ساتھ ہو۔"],
 ["v","13:28","… Sun lo! Allah ki yaad hi se dilon ko itminan milta hai.","… سن لو! اللہ کی یاد ہی سے دلوں کو اطمینان ملتا ہے۔"],
 ["q","","Apne Rab ka zikr karne wale aur na karne wale ki misaal zinda aur murda jaisi hai.","اپنے رب کا ذکر کرنے والے اور نہ کرنے والے کی مثال زندہ اور مردہ جیسی ہے۔","Sahih Bukhari"],
 ["q","كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ: سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ، سُبْحَانَ اللّٰهِ الْعَظِيمِ","Do kalime zabaan par halke, mizaan mein bhaari aur Rahman ko pyaare hain: SubhanAllahi wa bihamdihi, SubhanAllahil-Azeem.","دو کلمے زبان پر ہلکے، میزان میں بھاری اور رحمٰن کو پیارے ہیں: سبحان اللہ وبحمدہ، سبحان اللہ العظیم۔","Sahih Bukhari, Sahih Muslim"],
 ["h","Hasil karne ka tareeqa","حاصل کرنے کا طریقہ"],
 ["l",[
  ["Roz taleem mein baithna (infiradi aur ijtimai), aur ulama ki suhbat mein masail seekhna.","روز تعلیم میں بیٹھنا (انفرادی اور اجتماعی)، اور علماء کی صحبت میں مسائل سیکھنا۔"],
  ["Subah-shaam teen tasbeehaat: 100 baar Teesra Kalima (ya SubhanAllah…), 100 baar Durood Shareef, 100 baar Istighfar.","صبح و شام تین تسبیحات: ١٠٠ بار تیسرا کلمہ (یا سبحان اللہ…)، ١٠٠ بار درود شریف، ١٠٠ بار استغفار۔"],
  ["Roz kuch Quran ki tilawat, aur masnoon duaon ka ahtimam (is app ka Duaein section).","روز کچھ قرآن کی تلاوت، اور مسنون دعاؤں کا اہتمام (اس ایپ کا دعائیں سیکشن)۔"]
 ]]
]},

{ro:"4. Ikram-e-Muslim", ur:"٤۔ اکرامِ مسلم", b:[
 ["h","Maqsad","مقصد"],
 ["p","Har musalman ki qadar aur izzat karna, us nisbat se jo uska Allah aur Rasool ﷺ se hai. Badon ka adab, chhoton par shafqat, ulama ki izzat, aur barabar walon ke saath achha sulook. Apna haq maangne ke bajaaye doosron ka haq ada karne ki fikr.","ہر مسلمان کی قدر اور عزت کرنا، اس نسبت سے جو اس کا اللہ اور رسول ﷺ سے ہے۔ بڑوں کا ادب، چھوٹوں پر شفقت، علماء کی عزت، اور برابر والوں کے ساتھ اچھا سلوک۔ اپنا حق مانگنے کے بجائے دوسروں کا حق ادا کرنے کی فکر۔"],
 ["h","Fazilat","فضیلت"],
 ["q","لَا يُؤْمِنُ أَحَدُكُمْ حَتّٰى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ","Tum mein se koi momin nahi ho sakta jab tak apne bhai ke liye wahi pasand na kare jo apne liye pasand karta hai.","تم میں سے کوئی مومن نہیں ہو سکتا جب تک اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔","Sahih Bukhari, Sahih Muslim"],
 ["q","","Jo hamare chhoton par reham na kare aur hamare badon ki izzat na kare, woh hum mein se nahi.","جو ہمارے چھوٹوں پر رحم نہ کرے اور ہمارے بڑوں کی عزت نہ کرے، وہ ہم میں سے نہیں۔","Tirmidhi, Abu Dawood"],
 ["q","","Jo kisi momin ki dunya ki koi pareshani door kare, Allah qayamat ke din uski pareshani door karega; aur Allah bande ki madad mein rehta hai jab tak banda apne bhai ki madad mein rehta hai.","جو کسی مومن کی دنیا کی کوئی پریشانی دور کرے، اللہ قیامت کے دن اس کی پریشانی دور کرے گا؛ اور اللہ بندے کی مدد میں رہتا ہے جب تک بندہ اپنے بھائی کی مدد میں رہتا ہے۔","Sahih Muslim"],
 ["q","","Musalman woh hai jiski zabaan aur haath se doosre musalman mehfooz rahein.","مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں۔","Sahih Bukhari"],
 ["h","Hasil karne ka tareeqa","حاصل کرنے کا طریقہ"],
 ["l",[
  ["Ikram ki dawat dena aur iske fazail ka muzakara karna.","اکرام کی دعوت دینا اور اس کے فضائل کا مذاکرہ کرنا۔"],
  ["Salaam mein pehal karna, khidmat mein aage rehna, saathiyon ki zaroorat ka khayal rakhna.","سلام میں پہل کرنا، خدمت میں آگے رہنا، ساتھیوں کی ضرورت کا خیال رکھنا۔"],
  ["Doosron ke aib chhupana, apne aib dekhna; kisi ka dil na dukhaana.","دوسروں کے عیب چھپانا، اپنے عیب دیکھنا؛ کسی کا دل نہ دکھانا۔"],
  ["Allah se dua karna ki saari ummat ki muhabbat aur khair-khwahi dil mein aa jaaye.","اللہ سے دعا کرنا کہ ساری امت کی محبت اور خیر خواہی دل میں آ جائے۔"]
 ]]
]},

{ro:"5. Ikhlas-e-Niyyat", ur:"٥۔ اخلاصِ نیت", b:[
 ["h","Maqsad","مقصد"],
 ["p","Har amal sirf Allah ki raza ke liye karna — dunya ki tareef, naam ya faayde ke liye nahi. Amal se pehle niyyat durust karna, amal ke beech niyyat ko jaanchte rehna, aur amal ke baad usko qubool karwane ki fikr aur kotahi par istighfar.","ہر عمل صرف اللہ کی رضا کے لیے کرنا — دنیا کی تعریف، نام یا فائدے کے لیے نہیں۔ عمل سے پہلے نیت درست کرنا، عمل کے بیچ نیت کو جانچتے رہنا، اور عمل کے بعد اس کو قبول کروانے کی فکر اور کوتاہی پر استغفار۔"],
 ["h","Fazilat","فضیلت"],
 ["q","إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ","Amalon ka daromadar niyyaton par hai, aur har shakhs ko wahi milega jiski usne niyyat ki.","اعمال کا دارومدار نیتوں پر ہے، اور ہر شخص کو وہی ملے گا جس کی اس نے نیت کی۔","Sahih Bukhari, Sahih Muslim"],
 ["q","","Allah tumhari suraton aur tumhare maalon ko nahi dekhta, balki tumhare dilon aur tumhare amalon ko dekhta hai.","اللہ تمہاری صورتوں اور تمہارے مالوں کو نہیں دیکھتا، بلکہ تمہارے دلوں اور تمہارے اعمال کو دیکھتا ہے۔","Sahih Muslim"],
 ["v","98:5","… Aur unhein yahi hukm diya gaya tha ki Allah ki ibadat karein, deen ko usi ke liye khalis karte hue.","… اور انہیں یہی حکم دیا گیا تھا کہ اللہ کی عبادت کریں، دین کو اسی کے لیے خالص کرتے ہوئے۔"],
 ["h","Hasil karne ka tareeqa","حاصل کرنے کا طریقہ"],
 ["l",[
  ["Ikhlas ki dawat dena aur iske fazail ka muzakara karna.","اخلاص کی دعوت دینا اور اس کے فضائل کا مذاکرہ کرنا۔"],
  ["Har amal se pehle ruk kar niyyat durust karna: 'yeh main Allah ke liye kar raha hoon'.","ہر عمل سے پہلے رک کر نیت درست کرنا: 'یہ میں اللہ کے لیے کر رہا ہوں'۔"],
  ["Apne amal ko chhota samajhna, doosron ke saamne apne amal ka tazkira na karna.","اپنے عمل کو چھوٹا سمجھنا، دوسروں کے سامنے اپنے عمل کا تذکرہ نہ کرنا۔"],
  ["Allah se ikhlas maangna aur riya se panah maangna.","اللہ سے اخلاص مانگنا اور ریا سے پناہ مانگنا۔"]
 ]]
]},

{ro:"6. Dawat o Tabligh (Tafreegh-e-Waqt)", ur:"٦۔ دعوت و تبلیغ (تفریغِ وقت)", b:[
 ["h","Maqsad","مقصد"],
 ["p","Apni jaan aur maal ke saath Allah ke raaste mein nikal kar deen seekhna aur poori ummat tak deen pahunchane ki fikr karna — jo mehnat Nabi ﷺ aur Sahaba (RA) ne ki, wahi mehnat apni zindagi ka maqsad banana. Pehle khud ki islah ki niyyat, phir doosron ki.","اپنی جان اور مال کے ساتھ اللہ کے راستے میں نکل کر دین سیکھنا اور پوری امت تک دین پہنچانے کی فکر کرنا — جو محنت نبی ﷺ اور صحابہؓ نے کی، وہی محنت اپنی زندگی کا مقصد بنانا۔ پہلے خود کی اصلاح کی نیت، پھر دوسروں کی۔"],
 ["h","Fazilat","فضیلت"],
 ["v","3:110","Tum behtareen ummat ho jo logon ke liye nikali gayi: tum bhalaai ka hukm dete ho, buraai se rokte ho aur Allah par imaan rakhte ho.","تم بہترین امت ہو جو لوگوں کے لیے نکالی گئی: تم بھلائی کا حکم دیتے ہو، برائی سے روکتے ہو اور اللہ پر ایمان رکھتے ہو۔"],
 ["v","41:33","Aur us se behtar baat kis ki ho sakti hai jo Allah ki taraf bulaaye, nek amal kare aur kahe ki main musalmanon mein se hoon.","اور اس سے بہتر بات کس کی ہو سکتی ہے جو اللہ کی طرف بلائے، نیک عمل کرے اور کہے کہ میں مسلمانوں میں سے ہوں۔"],
 ["q","بَلِّغُوا عَنِّي وَلَوْ آيَةً","Meri taraf se pahuncha do, chahe ek hi ayat ho.","میری طرف سے پہنچا دو، چاہے ایک ہی آیت ہو۔","Sahih Bukhari"],
 ["q","","Allah tumhare zariye ek aadmi ko bhi hidayat de de, to yeh tumhare liye surkh oonton se behtar hai.","اللہ تمہارے ذریعے ایک آدمی کو بھی ہدایت دے دے، تو یہ تمہارے لیے سرخ اونٹوں سے بہتر ہے۔","Sahih Bukhari, Sahih Muslim"],
 ["q","","Allah ke raaste mein ek subah ya ek shaam nikalna dunya aur jo kuch usmein hai, usse behtar hai.","اللہ کے راستے میں ایک صبح یا ایک شام نکلنا دنیا اور جو کچھ اس میں ہے، اس سے بہتر ہے۔","Sahih Bukhari, Sahih Muslim"],
 ["h","Hasil karne ka tareeqa","حاصل کرنے کا طریقہ"],
 ["l",[
  ["Waqt farigh karke Allah ke raaste mein nikalna — teen din har mahine, chilla (40 din) har saal, aur zindagi mein chaar mahine — jaisa jamaat mein targheeb di jaati hai.","وقت فارغ کر کے اللہ کے راستے میں نکلنا — تین دن ہر مہینے، چلہ (٤٠ دن) ہر سال، اور زندگی میں چار مہینے — جیسا جماعت میں ترغیب دی جاتی ہے۔"],
  ["Apne mohalle ki masjid ke kaam: roz ka mashwara, taleem, dhai ghante ki mulaqat, hafte ke do gasht.","اپنے محلے کی مسجد کے کام: روز کا مشورہ، تعلیم، ڈھائی گھنٹے کی ملاقات، ہفتے کے دو گشت۔"],
  ["Dawat dete waqt narmi, ikram aur khair-khwahi; behas se bachna.","دعوت دیتے وقت نرمی، اکرام اور خیر خواہی؛ بحث سے بچنا۔"],
  ["Allah se dua karna ki poori ummat ko hidayat mile aur hamein is mehnat ke liye qubool farmaye.","اللہ سے دعا کرنا کہ پوری امت کو ہدایت ملے اور ہمیں اس محنت کے لیے قبول فرمائے۔"]
 ]],
 ["n","Note: Yeh muzakara jamaat mein aam taur par is tarteeb se hota hai. Alfaaz har jagah thode alag ho sakte hain — apne halqe ke zimmedar sathiyon ki tarteeb ko tarjeeh dein.","نوٹ: یہ مذاکرہ جماعت میں عام طور پر اس ترتیب سے ہوتا ہے۔ الفاظ ہر جگہ تھوڑے الگ ہو سکتے ہیں — اپنے حلقے کے ذمہ دار ساتھیوں کی ترتیب کو ترجیح دیں۔"]
]}
]},

/* ===================== 2. GASHT ===================== */
{id:"gasht", icon:"⇄", ro:"Gasht", ur:"گشت", sro:"Fazail ka muzakara, usool aur darmiyani baat", sur:"فضائل کا مذاکرہ، اصول اور درمیانی بات", ch:[

{ro:"Gasht ke fazail ka muzakara", ur:"گشت کے فضائل کا مذاکرہ", b:[
 ["p","Gasht se pehle saathi baith kar gasht ki ahmiyat aur fazilat ka muzakara karte hain, taaki dil mein shauq aur ikhlas paida ho.","گشت سے پہلے ساتھی بیٹھ کر گشت کی اہمیت اور فضیلت کا مذاکرہ کرتے ہیں، تاکہ دل میں شوق اور اخلاص پیدا ہو۔"],
 ["l",[
  ["Gasht Nabi ﷺ ki sunnat hai — aap ﷺ Makka mein logon ke ghar, bazaar aur mele mein ja kar unhein Allah ki taraf bulate the.","گشت نبی ﷺ کی سنت ہے — آپ ﷺ مکہ میں لوگوں کے گھر، بازار اور میلوں میں جا کر انہیں اللہ کی طرف بلاتے تھے۔"],
  ["Gasht dawat ka asal kaam hai, isko 'reedh ki haddi' kaha jaata hai; isse masjid aabaad hoti hai aur mahol banta hai.","گشت دعوت کا اصل کام ہے، اس کو 'ریڑھ کی ہڈی' کہا جاتا ہے؛ اس سے مسجد آباد ہوتی ہے اور ماحول بنتا ہے۔"],
  ["Gasht mein jaane wale ke qadam Allah ke raaste mein uthte hain.","گشت میں جانے والے کے قدم اللہ کے راستے میں اٹھتے ہیں۔"]
 ]],
 ["q","","Jis bande ke qadam Allah ke raaste mein gard-aalood hue, use (jahannam ki) aag nahi chhuegi.","جس بندے کے قدم اللہ کے راستے میں گرد آلود ہوئے، اسے (جہنم کی) آگ نہیں چھوئے گی۔","Sahih Bukhari"],
 ["q","","Allah ke raaste mein ek subah ya ek shaam nikalna dunya aur jo kuch usmein hai, usse behtar hai.","اللہ کے راستے میں ایک صبح یا ایک شام نکلنا دنیا اور جو کچھ اس میں ہے، اس سے بہتر ہے۔","Sahih Bukhari, Sahih Muslim"]
]},

{ro:"Gasht ke usool aur adaab", ur:"گشت کے اصول اور آداب", b:[
 ["h","Gasht ki tarteeb","گشت کی ترتیب"],
 ["l",[
  ["Ek Amir, ek Mutakallim (baat karne wala), ek Rahbar (mohalle ka jaanne wala); baaki saathi zikr karte hue saath chalein.","ایک امیر، ایک متکلم (بات کرنے والا)، ایک رہبر (محلے کا جاننے والا)؛ باقی ساتھی ذکر کرتے ہوئے ساتھ چلیں۔"],
  ["Masjid mein kuch saathi 'zikr aur dua' mein baithein, aur ek saathi 'istiqbal' ke liye — jo log aayein unka ikram karein.","مسجد میں کچھ ساتھی 'ذکر اور دعا' میں بیٹھیں، اور ایک ساتھی 'استقبال' کے لیے — جو لوگ آئیں ان کا اکرام کریں۔"],
  ["Nikalne se pehle mukhtasar muzakara aur dua.","نکلنے سے پہلے مختصر مذاکرہ اور دعا۔"]
 ]],
 ["h","Raaste ke adaab","راستے کے آداب"],
 ["l",[
  ["Nazrein neechi, zabaan par zikr, dil mein Allah ka dhyan.","نظریں نیچی، زبان پر ذکر، دل میں اللہ کا دھیان۔"],
  ["Raaste ke ek kinare chalna, aapas mein faaltu baat na karna.","راستے کے ایک کنارے چلنا، آپس میں فالتو بات نہ کرنا۔"],
  ["Ghar ke andar na jhaankna; darwaze ke ek taraf khade ho kar dastak dena aur salaam karna.","گھر کے اندر نہ جھانکنا؛ دروازے کے ایک طرف کھڑے ہو کر دستک دینا اور سلام کرنا۔"],
  ["Mukhtasar baat: Allah ki azmat, aakhirat ki fikr, aur masjid aane ki dawat. Behas aur siyasi/ikhtilafi baaton se bachna.","مختصر بات: اللہ کی عظمت، آخرت کی فکر، اور مسجد آنے کی دعوت۔ بحث اور سیاسی/اختلافی باتوں سے بچنا۔"],
  ["Jo saath aane ko tayyar ho, use usi waqt masjid le aana ('naqd' le aana).","جو ساتھ آنے کو تیار ہو، اسے اسی وقت مسجد لے آنا ('نقد' لے آنا)۔"],
  ["Gasht ke baad wapas aa kar kotahiyon par istighfar.","گشت کے بعد واپس آ کر کوتاہیوں پر استغفار۔"]
 ]]
]},

{ro:"Darmiyani baat", ur:"درمیانی بات", b:[
 ["p","Gasht ke dauran jo bhai masjid aate hain, unhein namaz tak masjid mein rok kar ek mukhtasar baat ki jaati hai — ise 'darmiyani baat' kehte hain. Yeh 5–10 minute ki seedhi-saadi baat hoti hai.","گشت کے دوران جو بھائی مسجد آتے ہیں، انہیں نماز تک مسجد میں روک کر ایک مختصر بات کی جاتی ہے — اسے 'درمیانی بات' کہتے ہیں۔ یہ ٥–١٠ منٹ کی سیدھی سادی بات ہوتی ہے۔"],
 ["h","Baat ki tarteeb (namuna)","بات کی ترتیب (نمونہ)"],
 ["l",[
  ["Ikram ke saath istiqbal: 'Aap tashreef laaye, Allah aapko jaza de.'","اکرام کے ساتھ استقبال: 'آپ تشریف لائے، اللہ آپ کو جزا دے۔'"],
  ["Allah ki azmat: zameen-aasman, zindagi-maut, rizq — sab Allah ke qabze mein hai; makhlooq se kuch nahi hota.","اللہ کی عظمت: زمین و آسمان، زندگی و موت، رزق — سب اللہ کے قبضے میں ہے؛ مخلوق سے کچھ نہیں ہوتا۔"],
  ["Dunya ki zindagi thodi hai, aakhirat hamesha ki; kamyabi Allah ke hukm aur Nabi ﷺ ke tareeqe mein hai.","دنیا کی زندگی تھوڑی ہے، آخرت ہمیشہ کی؛ کامیابی اللہ کے حکم اور نبی ﷺ کے طریقے میں ہے۔"],
  ["Deen par aana tab aasaan hoga jab deen ki mehnat karein — jaise Sahaba ne ki.","دین پر آنا تب آسان ہوگا جب دین کی محنت کریں — جیسے صحابہ نے کی۔"],
  ["Namaz ka waqt qareeb hai; namaz ke baad aham baat hogi, zaroor ruk jaayein.","نماز کا وقت قریب ہے؛ نماز کے بعد اہم بات ہوگی، ضرور رک جائیں۔"]
 ]],
 ["n","Darmiyani baat chhoti rakhein, masail ya lambi kahaniyan na chhedein; maqsad sirf dil narm karna aur namaz ke baad ki baat ke liye rokna hai.","درمیانی بات چھوٹی رکھیں، مسائل یا لمبی کہانیاں نہ چھیڑیں؛ مقصد صرف دل نرم کرنا اور نماز کے بعد کی بات کے لیے روکنا ہے۔"]
]}
]},

/* ===================== 3. BAATEIN ===================== */
{id:"baat", icon:"☾", ro:"Maghrib ke baad ki baat", ur:"مغرب کے بعد کی بات", sro:"Umoomi baat (bayan) ki tarteeb aur tashkeel", sur:"عمومی بات (بیان) کی ترتیب اور تشکیل", ch:[
{ro:"Umoomi baat ki tarteeb", ur:"عمومی بات کی ترتیب", b:[
 ["p","Gasht ke baad Maghrib (ya jis namaz ke baad gasht ho) ke baad masjid mein maujood logon se jo baat hoti hai, use 'umoomi baat' ya bayan kehte hain. Iska maqsad imaan ki dawat aur Allah ke raaste mein nikalne ki targheeb hai. Neeche aam tarteeb di gayi hai:","گشت کے بعد مغرب (یا جس نماز کے بعد گشت ہو) کے بعد مسجد میں موجود لوگوں سے جو بات ہوتی ہے، اسے 'عمومی بات' یا بیان کہتے ہیں۔ اس کا مقصد ایمان کی دعوت اور اللہ کے راستے میں نکلنے کی ترغیب ہے۔ نیچے عام ترتیب دی گئی ہے:"],
 ["l",[
  ["Hamd-o-sana aur Durood: 'Nahmaduhu wa nusalli 'ala Rasulihil Kareem'.","حمد و ثنا اور درود: 'نحمدہ ونصلی علیٰ رسولہ الکریم'۔"],
  ["Allah ki zaat aur sifaat ka bayan: Allah hi khaaliq, maalik, raaziq hain; har cheez Allah ke hukm se hoti hai.","اللہ کی ذات اور صفات کا بیان: اللہ ہی خالق، مالک، رازق ہیں؛ ہر چیز اللہ کے حکم سے ہوتی ہے۔"],
  ["Insaan ki kamyabi ka raasta: kamyabi maal-o-asbaab mein nahi, Allah ke hukm aur Nabi ﷺ ke tareeqe par chalne mein hai.","انسان کی کامیابی کا راستہ: کامیابی مال و اسباب میں نہیں، اللہ کے حکم اور نبی ﷺ کے طریقے پر چلنے میں ہے۔"],
  ["Maut, qabr, qayamat aur jannat-jahannam ka tazkira.","موت، قبر، قیامت اور جنت و جہنم کا تذکرہ۔"],
  ["Nabi ﷺ aur Sahaba (RA) ki mehnat: imaan aur deen ke liye unki qurbaniyan.","نبی ﷺ اور صحابہؓ کی محنت: ایمان اور دین کے لیے ان کی قربانیاں۔"],
  ["Aaj ummat ka haal aur hamari zimmedari: Khatm-e-Nubuwwat ke baad yeh kaam ummat ke zimme hai.","آج امت کا حال اور ہماری ذمہ داری: ختمِ نبوت کے بعد یہ کام امت کے ذمے ہے۔"],
  ["Chhe sifaat ka mukhtasar tazkira — inko seekhne ke liye maahol ki zaroorat.","چھ صفات کا مختصر تذکرہ — ان کو سیکھنے کے لیے ماحول کی ضرورت۔"],
  ["Tashkeel: teen din, chilla, chaar mahine ke liye naam likhwana; jo abhi na nikal sake woh mohalle ke kaam (taleem, mashwara, gasht) mein jud jaaye.","تشکیل: تین دن، چلہ، چار مہینے کے لیے نام لکھوانا؛ جو ابھی نہ نکل سکے وہ محلے کے کام (تعلیم، مشورہ، گشت) میں جڑ جائے۔"],
  ["Ijtimai dua.","اجتماعی دعا۔"]
 ]],
 ["h","Baat karne wale ke adaab","بات کرنے والے کے آداب"],
 ["l",[
  ["Mashware se baat karna, Amir ki ijazat se.","مشورے سے بات کرنا، امیر کی اجازت سے۔"],
  ["Apne aap ko sabse zyada mohtaaj samajh kar baat karna; khud ko islah ka zyada haqdaar samajhna.","اپنے آپ کو سب سے زیادہ محتاج سمجھ کر بات کرنا؛ خود کو اصلاح کا زیادہ حقدار سمجھنا۔"],
  ["Sirf mustanad ahadees aur waqiyat bayan karna; ikhtilafi masail, siyasat aur kisi ki burai se bachna.","صرف مستند احادیث اور واقعات بیان کرنا؛ اختلافی مسائل، سیاست اور کسی کی برائی سے بچنا۔"],
  ["Waqt ka khayal rakhna, logon par bojh na daalna.","وقت کا خیال رکھنا، لوگوں پر بوجھ نہ ڈالنا۔"]
 ]],
 ["h","Sunne wale ke adaab","سننے والے کے آداب"],
 ["l",[
  ["Ba-wuzu, adab ke saath, aage baith kar sunna.","با وضو، ادب کے ساتھ، آگے بیٹھ کر سننا۔"],
  ["Is niyyat se sunna ki mujhe amal karna hai, aur aage pahunchana hai.","اس نیت سے سننا کہ مجھے عمل کرنا ہے، اور آگے پہنچانا ہے۔"],
  ["Mobile band, aapas mein baat nahi, takiya laga kar ya laparwahi se na baithna.","موبائل بند، آپس میں بات نہیں، تکیہ لگا کر یا لاپرواہی سے نہ بیٹھنا۔"]
 ]]
]}
]},

/* ===================== 4. MUZAKARE ===================== */
{id:"muzakare", icon:"✦", ro:"Aham Muzakare", ur:"اہم مذاکرے", sro:"Masjid ke kaam, taleem, mashwara, jamaat ke usool", sur:"مسجد کے کام، تعلیم، مشورہ، جماعت کے اصول", ch:[

{ro:"Jamaat mein waqt ke usool", ur:"جماعت میں وقت کے اصول", b:[
 ["p","Jamaat mein aam taur par yeh usool bataye jaate hain, taaki waqt ka poora faayda ho:","جماعت میں عام طور پر یہ اصول بتائے جاتے ہیں، تاکہ وقت کا پورا فائدہ ہو:"],
 ["h","Chaar kaam karne ke","چار کام کرنے کے"],
 ["l",[["Dawat","دعوت"],["Taleem o Ta'allum","تعلیم و تعلم"],["Zikr o Ibadat","ذکر و عبادت"],["Khidmat","خدمت"]]],
 ["h","Chaar kaam kam karne ke","چار کام کم کرنے کے"],
 ["l",[["Khana peena kam","کھانا پینا کم"],["Sona kam","سونا کم"],["Faaltu baat-cheet kam","فالتو بات چیت کم"],["Masjid se bahar jaana kam (bila zaroorat nahi)","مسجد سے باہر جانا کم (بلا ضرورت نہیں)"]]],
 ["h","Chaar kaamon se bachna","چار کاموں سے بچنا"],
 ["l",[["Kisi se sawal karna (maangna)","کسی سے سوال کرنا (مانگنا)"],["Dil mein kisi se ummeed lagana (ishraaf)","دل میں کسی سے امید لگانا (اشراف)"],["Fuzool kharchi (israaf)","فضول خرچی (اسراف)"],["Bila ijazat kisi ki cheez istemal karna","بلا اجازت کسی کی چیز استعمال کرنا"]]],
 ["h","Amir ki itaat","امیر کی اطاعت"],
 ["q","","Jab teen aadmi safar mein niklein to apne mein se ek ko amir bana lein.","جب تین آدمی سفر میں نکلیں تو اپنے میں سے ایک کو امیر بنا لیں۔","Abu Dawood"],
 ["n","Yeh usool alag halqon mein thode farq se bataye jaate hain; apne markaz ki tarteeb ko tarjeeh dein.","یہ اصول الگ حلقوں میں تھوڑے فرق سے بتائے جاتے ہیں؛ اپنے مرکز کی ترتیب کو ترجیح دیں۔"]
]},

{ro:"Masjid ke chaar kaam (Masjid-war jamaat)", ur:"مسجد کے چار کام (مسجد وار جماعت)", b:[
 ["l",[
  ["Roz ka mashwara — mohalle ki masjid mein kaam ki fikr aur tarteeb.","روز کا مشورہ — محلے کی مسجد میں کام کی فکر اور ترتیب۔"],
  ["Roz ki taleem — masjid mein bhi aur ghar mein bhi (ghar ki taleem mein ghar walon ko saath bithana).","روز کی تعلیم — مسجد میں بھی اور گھر میں بھی (گھر کی تعلیم میں گھر والوں کو ساتھ بٹھانا)۔"],
  ["Dhai ghante roz ki mulaqat — logon se mil kar unhein masjid aur deen se jodna.","ڈھائی گھنٹے روز کی ملاقات — لوگوں سے مل کر انہیں مسجد اور دین سے جوڑنا۔"],
  ["Hafte ke do gasht — ek apne mohalle mein, ek qareeb ke mohalle mein.","ہفتے کے دو گشت — ایک اپنے محلے میں، ایک قریب کے محلے میں۔"],
  ["Har mahine teen din Allah ke raaste mein nikalna.","ہر مہینے تین دن اللہ کے راستے میں نکلنا۔"]
 ]],
 ["n","Kai jagah ise 'paanch aamaal' ke naam se bhi bataya jaata hai.","کئی جگہ اسے 'پانچ اعمال' کے نام سے بھی بتایا جاتا ہے۔"]
]},

{ro:"Taleem ke adaab", ur:"تعلیم کے آداب", b:[
 ["l",[
  ["Ba-wuzu ho kar, halqa bana kar, do-zaanu (adab se) baithna.","با وضو ہو کر، حلقہ بنا کر، دو زانو (ادب سے) بیٹھنا۔"],
  ["Kitab ko izzat se rakhna, Allah aur Rasool ﷺ ke naam par durood aur ta'zeem.","کتاب کو عزت سے رکھنا، اللہ اور رسول ﷺ کے نام پر درود اور تعظیم۔"],
  ["Padhne wala saaf aur theher theher kar padhe; sunne wale dhyan se sunein.","پڑھنے والا صاف اور ٹھہر ٹھہر کر پڑھے؛ سننے والے دھیان سے سنیں۔"],
  ["Hadees sunte waqt dil mein yaqeen aur amal ka iraada; 'Sallallahu alaihi wasallam' kehna.","حدیث سنتے وقت دل میں یقین اور عمل کا ارادہ؛ 'صلی اللہ علیہ وسلم' کہنا۔"],
  ["Taleem mein Fazail-e-Amaal, Fazail-e-Sadaqat aur Muntakhab Ahadees padhi jaati hain; saath mein Quran ki chhoti suraton ki mashq aur chhe sifaat ka muzakara.","تعلیم میں فضائلِ اعمال، فضائلِ صدقات اور منتخب احادیث پڑھی جاتی ہیں؛ ساتھ میں قرآن کی چھوٹی سورتوں کی مشق اور چھ صفات کا مذاکرہ۔"]
 ]]
]},

{ro:"Mashwara ke adaab", ur:"مشورہ کے آداب", b:[
 ["v","42:38","… Aur unke kaam aapas ke mashware se hote hain.","… اور ان کے کام آپس کے مشورے سے ہوتے ہیں۔"],
 ["l",[
  ["Mashware se pehle dua aur niyyat: Allah ki raza aur kaam ki behtari.","مشورے سے پہلے دعا اور نیت: اللہ کی رضا اور کام کی بہتری۔"],
  ["Amir (ya faisal) ki tarteeb se raai dena; jab poocha jaaye tab bolna.","امیر (یا فیصل) کی ترتیب سے رائے دینا؛ جب پوچھا جائے تب بولنا۔"],
  ["Apni raai ko amanat samajh kar dena, uspe ad jaana nahi.","اپنی رائے کو امانت سمجھ کر دینا، اس پر اڑ جانا نہیں۔"],
  ["Faisla jo bhi ho, dil se qubool karna — chahe apni raai ke khilaf ho.","فیصلہ جو بھی ہو، دل سے قبول کرنا — چاہے اپنی رائے کے خلاف ہو۔"],
  ["Mashware ki baat bahar na karna.","مشورے کی بات باہر نہ کرنا۔"]
 ]]
]}
]}
];
