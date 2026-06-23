// 🔮 78張完整塔羅牌潛意識矩陣數據庫 // MATRIX_78_CORE
const tarotCardsPool = [
    // --- 大阿爾克那 (Major Arcana) ---
    { "name": "The Fool", "img": "m00.jpg", "nameCN": "愚者" },
    { "name": "The Magician", "img": "m01.jpg", "nameCN": "魔術師" },
    { "name": "The High Priestess", "img": "m02.jpg", "nameCN": "女祭司" },
    { "name": "The Empress", "img": "m03.jpg", "nameCN": "皇后" },
    { "name": "The Emperor", "img": "m04.jpg", "nameCN": "皇帝" },
    { "name": "The Hierophant", "img": "m05.jpg", "nameCN": "教皇" },
    { "name": "The Lovers", "img": "m06.jpg", "nameCN": "戀人" },
    { "name": "The Chariot", "img": "m07.jpg", "nameCN": "戰車" },
    { "name": "Strength", "img": "m08.jpg", "nameCN": "力量" },
    { "name": "The Hermit", "img": "m09.jpg", "nameCN": "隱士" },
    { "name": "Wheel of Fortune", "img": "m10.jpg", "nameCN": "命運之輪" },
    { "name": "Justice", "img": "m11.jpg", "nameCN": "正義" },
    { "name": "The Hanged Man", "img": "m12.jpg", "nameCN": "倒吊人" },
    { "name": "Death", "img": "m13.jpg", "nameCN": "死神" },
    { "name": "Temperance", "img": "m14.jpg", "nameCN": "節制" },
    { "name": "The Devil", "img": "m15.jpg", "nameCN": "惡魔" },
    { "name": "The Tower", "img": "m16.jpg", "nameCN": "高塔" },
    { "name": "The Star", "img": "m17.jpg", "nameCN": "星星" },
    { "name": "The Moon", "img": "m18.jpg", "nameCN": "月亮" },
    { "name": "The Sun", "img": "m19.jpg", "nameCN": "太陽" },
    { "name": "Judgement", "img": "m20.jpg", "nameCN": "審判" },
    { "name": "The World", "img": "m21.jpg", "nameCN": "世界" },

    // --- 權杖元素 (Wands) ---
    { "name": "Ace of Wands", "img": "w01.jpg", "nameCN": "權杖一" },
    { "name": "Two of Wands", "img": "w02.jpg", "nameCN": "權杖二" },
    { "name": "Three of Wands", "img": "w03.jpg", "nameCN": "權杖三" },
    { "name": "Four of Wands", "img": "w04.jpg", "nameCN": "權杖四" },
    { "name": "Five of Wands", "img": "w05.jpg", "nameCN": "權杖五" },
    { "name": "Six of Wands", "img": "w06.jpg", "nameCN": "權杖六" },
    { "name": "Seven of Wands", "img": "w07.jpg", "nameCN": "權杖七" },
    { "name": "Eight of Wands", "img": "w08.jpg", "nameCN": "權杖八" },
    { "name": "Nine of Wands", "img": "w09.jpg", "nameCN": "權杖九" },
    { "name": "Ten of Wands", "img": "w10.jpg", "nameCN": "權杖十" },
    { "name": "Page of Wands", "img": "w11.jpg", "nameCN": "權杖侍從" },
    { "name": "Knight of Wands", "img": "w12.jpg", "nameCN": "權杖騎士" },
    { "name": "Queen of Wands", "img": "w13.jpg", "nameCN": "權杖皇后" },
    { "name": "King of Wands", "img": "w14.jpg", "nameCN": "權杖國王" },

    // --- 聖杯元素 (Cups) ---
    { "name": "Ace of Cups", "img": "c01.jpg", "nameCN": "聖杯一" },
    { "name": "Two of Cups", "img": "c02.jpg", "nameCN": "聖杯二" },
    { "name": "Three of Cups", "img": "c03.jpg", "nameCN": "聖杯三" },
    { "name": "Four of Cups", "img": "c04.jpg", "nameCN": "聖杯四" },
    { "name": "Five of Cups", "img": "c05.jpg", "nameCN": "聖杯五" },
    { "name": "Six of Cups", "img": "c06.jpg", "nameCN": "聖杯六" },
    { "name": "Seven of Cups", "img": "c07.jpg", "nameCN": "聖杯七" },
    { "name": "Eight of Cups", "img": "c08.jpg", "nameCN": "聖杯八" },
    { "name": "Nine of Cups", "img": "c09.jpg", "nameCN": "聖杯九" },
    { "name": "Ten of Cups", "img": "c10.jpg", "nameCN": "聖杯十" },
    { "name": "Page of Cups", "img": "c11.jpg", "nameCN": "聖杯侍從" },
    { "name": "Knight of Cups", "img": "c12.jpg", "nameCN": "聖杯騎士" },
    { "name": "Queen of Cups", "img": "c13.jpg", "nameCN": "聖杯皇后" },
    { "name": "King of Cups", "img": "c14.jpg", "nameCN": "聖杯國王" },

    // --- 寶劍元素 (Swords) ---
    { "name": "Ace of Swords", "img": "s01.jpg", "nameCN": "寶劍一" },
    { "name": "Two of Swords", "img": "s02.jpg", "nameCN": "寶劍二" },
    { "name": "Three of Swords", "img": "s03.jpg", "nameCN": "寶劍三" },
    { "name": "Four of Swords", "img": "s04.jpg", "nameCN": "寶劍四" },
    { "name": "Five of Swords", "img": "s05.jpg", "nameCN": "寶劍五" },
    { "name": "Six of Swords", "img": "s06.jpg", "nameCN": "寶劍六" },
    { "name": "Seven of Swords", "img": "s07.jpg", "nameCN": "寶劍七" },
    { "name": "Eight of Swords", "img": "s08.jpg", "nameCN": "寶劍八" },
    { "name": "Nine of Swords", "img": "s09.jpg", "nameCN": "寶劍九" },
    { "name": "Ten of Swords", "img": "s10.jpg", "nameCN": "寶劍十" },
    { "name": "Page of Swords", "img": "s11.jpg", "nameCN": "寶劍侍從" },
    { "name": "Knight of Swords", "img": "s12.jpg", "nameCN": "寶劍騎士" },
    { "name": "Queen of Swords", "img": "s13.jpg", "nameCN": "寶劍皇后" },
    { "name": "King of Swords", "img": "s14.jpg", "nameCN": "寶劍國王" },

    // --- 錢幣元素 (Pentacles) ---
    { "name": "Ace of Pentacles", "img": "p01.jpg", "nameCN": "錢幣一" },
    { "name": "Two of Pentacles", "img": "p02.jpg", "nameCN": "錢幣二" },
    { "name": "Three of Pentacles", "img": "p03.jpg", "nameCN": "錢幣三" },
    { "name": "Four of Pentacles", "img": "p04.jpg", "nameCN": "錢幣四" },
    { "name": "Five of Pentacles", "img": "p05.jpg", "nameCN": "錢幣五" },
    { "name": "Six of Pentacles", "img": "p06.jpg", "nameCN": "錢幣六" },
    { "name": "Seven of Pentacles", "img": "p07.jpg", "nameCN": "錢幣七" },
    { "name": "Eight of Pentacles", "img": "p08.jpg", "nameCN": "錢幣八" },
    { "name": "Nine of Pentacles", "img": "p09.jpg", "nameCN": "錢幣九" },
    { "name": "Ten of Pentacles", "img": "p10.jpg", "nameCN": "錢幣十" },
    { "name": "Page of Pentacles", "img": "p11.jpg", "nameCN": "錢幣侍從" },
    { "name": "Knight of Pentacles", "img": "p12.jpg", "nameCN": "錢幣騎士" },
    { "name": "Queen of Pentacles", "img": "p13.jpg", "nameCN": "錢幣皇后" },
    { "name": "King of Pentacles", "img": "p14.jpg", "nameCN": "錢幣國王" }
];

// 擴充動態生成 78 張牌正逆位解讀文字庫的引擎（包含大阿爾克那與四大元素小阿爾克那）
function getDynamicTarotMeanings() {
    const meanings = {
        // --- 大阿爾克那 核心核心文本 ---
        "The Fool": { nameCN: "愚者", general: { upright: "代表全新的開始與冒險精神。信任你的直覺，大膽跳入未知的流中。", reversed: "警告你可能過於魯莽或缺乏計劃。盲目的樂觀可能導致失控，建議先冷靜檢視底細。" }, love: { upright: "一段充滿新鮮感、無拘無束的新戀情即將展開。享受當下的火花。", reversed: "感情中出現了不負責的跡象。一方可能害怕承諾，忽略了潛在風險。" }, work: { upright: "適合挑戰全新的領域、創業或跳槽。拋開傳統框架的黃金期。", reversed: "工作上缺乏規劃導致混亂。不建議在此時進行未經評估的高風險決定。" } },
        "The Magician": { nameCN: "魔術師", general: { upright: "你掌握著強大的資源與行動力。將想法轉化為現實的時機已成熟。", reversed: "注意掌握的力量是否被誤用。可能存在操縱、欺騙或空有才華缺乏執行力的情況。" }, love: { upright: "關係中溝通流暢，充滿魅力與趣味。頻率極高。", reversed: "注意感情中的甜言蜜語背後是否藏有隱瞞，互動流於表面。" }, work: { upright: "展現強大工作能力的黃金時期。升職與發展能量非常旺盛。", reversed: "職場上被話術欺騙或操縱。專注力過於分散，導致進度停滯。" } },
        "The High Priestess": { nameCN: "女祭司", general: { upright: "直覺與潛意識正處於高頻共振期。保持冷靜，被隱藏的真相即將浮現。", reversed: "可能過於壓抑情感，或過度理智而忽略了直覺的警訊。建議誠實面對恐懼。" }, love: { upright: "感情上較為被動、注重精神交流。正處於冷靜觀察的狀態。", reversed: "情感壓抑過度導致隔閡加深。過度敏感、多疑，讓對方難以靠近。" }, work: { upright: "適合從事研究、分析等靜態工作。靠精準直覺能在複雜數據中找出正確抉擇。", reversed: "面對職場決策時過度猶豫不決。不適合簽署任何重要契約。" } },
        "The Empress": { nameCN: "皇后", general: { upright: "代表豐收、繁榮與物質富足。無論是生活還是計畫，都將迎來豐碩回報。", reversed: "目前可能感到缺乏安全感，或對環境有過度的控制慾。創造力受到阻塞。" }, love: { upright: "感情生活充滿甜蜜與溫馨，彼此包容與支持。近期桃花能量強勁。", reversed: "關係中表現得過度控制或佔有慾過強。注意物質問題可能導致摩擦。" }, work: { upright: "職場發展順遂，努力將迎來實質回報。團隊氛圍和諧。", reversed: "工作流於安逸、怠惰，缺乏前進的積極度。注意職場上不要過於感情用事。" } },
        "The Emperor": { nameCN: "皇帝", general: { upright: "掌握著秩序與權力。擁有堅強意志力與清晰掌控架構。穩定與紀律是成功的關鍵。", reversed: "注意不要流於專專橫霸道。當前架構可能過於僵化，或逐漸失去掌控。" }, love: { upright: "關係穩定、具安全感。以責任感與忠誠為基石，非常可靠。", reversed: "一方過於專斷、固執、難以溝通。互動充滿壓迫感。" }, work: { upright: "有望晉升主管職、建立制度。專注於架構優化，成功將近在咫尺。", reversed: "職場遇到僵化的體制或過於守舊，不願接受新技術，會讓進度卡關。" } },
        "The Hierophant": { nameCN: "教皇", general: { upright: "代表傳統、體制、精神導師。此時遵循既定規則或尋求專家指點是安全的。", reversed: "暗示你需要打破常規，挑戰舊有體制，尋求屬於自己的非傳統道路。" }, love: { upright: "感情走向傳統體制，如承諾、訂婚或婚姻。注重價值觀的契合。", reversed: "關係受到傳統觀念、長輩壓力束縛，或雙方價值觀產生嚴重分歧。" }, work: { upright: "適合在大型機構、學校等穩定體制中發展，利於考運或求職。", reversed: "不滿職場教條，渴望創新或創業，現有機制正在限制你的發揮。" } },
        "The Lovers": { nameCN: "戀人", general: { upright: "象徵完美的和諧、吸引力與核心選擇。聆聽內心最真實的熱情做出決定。", reversed: "暗示內在能量產生了失衡，或當前面臨誘惑與錯誤抉擇。混亂內耗中。" }, love: { upright: "感情運勢極佳，彼此之間充滿強大吸引力。單身者將遇到靈魂同步對象。", reversed: "情感中出現不信任、多疑。需注意外界的野桃花誘惑。" }, work: { upright: "職場上迎來極佳合作機會，團隊默契十足。順應熱情就能做出正確決定。", reversed: "團隊內部出現拉扯或合作破裂。現階段抉擇可能只是出於短視近利。" } },
        "The Chariot": { nameCN: "戰車", general: { upright: "代表意志力、勝利與克服障礙。此時擁有極強專注力，勢不可擋。", reversed: "警告可能正逐漸失去掌控力，或前進方向發生嚴重偏離。盲目會演變成魯莽。" }, love: { upright: "感情上採取積極進攻姿態。有能力克服任何空間、背景或環境阻礙。", reversed: "感情中出現嚴重權力爭奪，互不相讓，遇到挫折容易衝動說出傷害彼此的話。" }, work: { upright: "事業上展現出強大競爭力，適合開拓新市場、接手高難度專案。", reversed: "專案進度面臨方向混亂窘境。情緒壓力已達臨界點，容易因衝動做錯決策。" } },
        "Strength": { nameCN: "力量", general: { upright: "內心堅韌與溫柔控制力達到完美平衡。憑藉無比耐心就能感化困難。", reversed: "暗示當前陷入自我懷疑，或是被內心的焦慮與恐懼所吞噬。" }, love: { upright: "在感情中展現高情商。能用溫柔與包容化解對方的壞脾氣與不安。", reversed: "關係中感到無力與疲憊，佔有慾失控。不對等的張力會消磨愛意。" }, work: { upright: "面對危機展現臨危不亂的沉著智慧。抗壓性獲得高度肯定。", reversed: "面臨巨大精神內耗。容易因自信不足而選擇退縮，把局勢搞砸。" } },
        "The Hermit": { nameCN: "隱士", general: { upright: "向內探索、尋求內在智慧的沉澱期。在潛意識深處點亮一盞指路明燈。", reversed: "警告可能過度與世隔絕，演變成逃避現實。陷入無意義的偏執。" }, love: { upright: "進入精神層次審視期。有伴者傾向給予彼此尊重空間，追求靈魂共鳴。", reversed: "彼此構築起高牆，溝通陷入名存實亡的冷淡狀態。一方可能在施展冷暴力。" }, work: { upright: "適合傾注於深度思考、技術研發或幕後顧問工作。沉穩積蓄核心知識。", reversed: "在職場上顯得與團隊格格不入。過於固執己見導致研發與現實脫節。" } },
        "Wheel of Fortune": { nameCN: "命運之輪", general: { upright: "不可抗拒的命運齒輪加速轉動。轉折點即將到來，局勢將朝有利方向發展。", reversed: "暗示處於運勢波動低谷期，容易遇到突如來來的阻礙，建議保持彈性。" }, love: { upright: "感情上迎來宿命般的緣分。單身者極易遇見一見鍾情的對象。", reversed: "發展面臨外部不可抗力干擾，陷入重複同一個矛盾的惡性循環。" }, work: { upright: "職場運勢迎來大洗牌轉機，順應潮流做出的變革將迎來翻倍回報。", reversed: "出現意料之外的變故。目前環境對你較不利，不建議盲目做重大投資。" } },
        "Justice": { nameCN: "正義", general: { upright: "代表公平、理性與因果律。過去種下的因，此時將迎來公正的果。", reversed: "局勢出現失衡、偏見或是遭受不公正對待。需小心因果迴力鏢。" }, love: { upright: "互動講求絕對公平與互相尊重。彼此坦誠相對，沒有隱瞞。", reversed: "關係出現嚴重失衡，雙方計較得失的張力拉滿，充滿無休止爭吵。" }, work: { upright: "適合處理契約簽署。只要秉持誠信，正義將會為你劈開謠言。", reversed: "職場遭遇不公平對待。注意此時不宜進行灰色操作，否則面臨查殺。" } },
        "The Hanged Man": { nameCN: "倒吊人", general: { upright: "雖然當前處於被動受限狀態，但只要換個角度看世界，這是為了更高成就的犧牲。", reversed: "暗示正在進行無謂掙扎，或者你的犧牲並沒有得到應有價值。" }, love: { upright: "甘願為對方付出與等待。此時按兵不動是在深耕基礎默契。", reversed: "出現了單方面無底線的委曲求全，退讓只換來對方的得寸進尺。" }, work: { upright: "面臨過渡期。適合退居幕後默默耕耘、沉澱技術，大動作開拓無效。", reversed: "陷入無意義的瞎忙與盲目內耗。需要立刻停止無謂奉獻，重新審視。" } },
        "Death": { nameCN: "死神", general: { upright: "徹底的終結與隨之而來的偉大新生。唯有清理掉冗餘，新代碼才能載入。", reversed: "死死抓著已經腐爛的過去不肯放手，拒絕接受改變。無限延長痛苦。" }, love: { upright: "不健康的關係將迎來徹底終結。空出雙手，新的人際矩陣才能成立。", reversed: "感情走到了冰點，因為恐懼孤單而選擇拖延，嚴重消耗能量。" }, work: { upright: "職場上面臨重大洗牌，劇變正是你建立全新王國的起點。", reversed: "事業發展面臨苟延殘喘，明知沒有前景依舊抱持幻想，錯失重生窗口。" } },
        "Temperance": { nameCN: "節制", general: { upright: "象徵完美的淨化與跨界融合。在動態平衡中創造出治癒能量。", reversed: "內在能量失去平衡，生活或人際關係出現溝通不良。" }, love: { upright: "交流達到精神完美契合。極具治癒感、細水長流的健康戀情。", reversed: "雙方溝通頻率完全不對盤。缺乏體貼與耐性，感情在瑣事中消磨。" }, work: { upright: "適合進行跨部門溝通或跨領域合作。強大協調能力能完美平衡衝突。", reversed: "職場人際關係失調，協作卡關。可能在時間分配上出現嚴重失衡。" } },
        "The Devil": { nameCN: "惡魔", general: { upright: "暗示正被強烈物質慾望、執念 or 不健康依賴關係束縛。直面陰暗面是關鍵。", reversed: "偉大的覺醒時刻。開始看清虛幻誘惑，潛意識自由代碼重新編寫。" }, love: { upright: "一段充滿致命肉體吸引力，但也伴隨強烈控制與嫉妒的關係。", reversed: "終於從充滿控制、冷暴力的虐戀中清醒。找回自主界線，勇敢抽身。" }, work: { upright: "能獲得巨大物質回報，但背後可能隱藏權謀鬥爭，高風險博弈。", reversed: "拒絕職場上的不正當誘惑或壓榨條款。決定離開血汗環境，奪回自主權。" } },
        "The Tower": { nameCN: "高塔", general: { upright: "警告！一場突如來、無法抗拒的毀滅性劇變即將震撼生活。強行系統重塑。", reversed: "危機雖然即將爆發，但衝擊已被降到最低；或代表粉飾太平。" }, love: { upright: "感情面臨毫無預警的重大衝擊，隱藏的秘密曝光，關係瞬間分崩離析。", reversed: "矛盾到了隨時爆炸邊緣，勉強維持表面和平更讓人折磨。" }, work: { upright: "職場上面臨突發性災難。不要試圖挽救，強迫你徹底更換全新賽道。", reversed: "工作中雷聲大雨點小，危機擦身而過，根本漏洞未解決，下次更致命。" } },
        "The Star": { nameCN: "星星", general: { upright: "風暴過後，亮起了代表希望與療癒的星光。內心焦慮平息，光明在望。", reversed: "正被失望與悲觀情緒籠罩。可能設定了過於虛無飄渺、不切實際的目標。" }, love: { upright: "一見鍾情一段充滿精神共鳴、純潔且具高度治癒感的戀情。", reversed: "對感情抱持過於脫離現實的完美幻想，對伴侶產生無謂的挑剔。" }, work: { upright: "靈感爆發黃金期，利於藝術創作、設計或品牌建立。才華吸引目光。", reversed: "計劃流於紙上談兵，缺乏執行可行性。高估資源、低估市場。" } },
        "The Moon": { nameCN: "月亮", general: { upright: "進入充滿迷霧、焦慮與未知恐懼的幽暗海域。資訊不透明，勿盲目決策。", reversed: "恐懼與焦慮開始逐漸消散。那些誤解與秘密即將水落石出。" }, love: { upright: "充滿不安、猜忌與情緒起伏的曖昧期。信任基礎極其脆弱。", reversed: "誤會與謊言即將被拆穿，不再逃避問題。隱藏的不安正逐步退場。" }, work: { upright: "環境充滿爾虞我詐。現階段專案合約細節極不透明，暗藏陷阱。", reversed: "原本混亂、拉扯不清的人事糾紛落幕。終於看清專案真實走向。" } },
        "The Sun": { nameCN: "太陽", general: { upright: "象徵極致成功、榮耀、活力與純粹快樂。萬事大吉的至尊王牌。", reversed: "整體運勢依舊保持水準，但光芒可能被短暫烏雲遮蔽。成功只會遲到。" }, love: { upright: "感情運勢爆棚！互動充滿陽光、熱情與坦率。極度受人羨慕。", reversed: "依舊溫馨，但少了一點剛開始的激情。注意不要因為小脾氣消磨熱情。" }, work: { upright: "事業迎來大光明鼎盛時期。求職、創業或升遷都將獲得成功。", reversed: "專案雖能成功，但過程花費比預期多的時間。職場注意不要功高震主。" } },
        "Judgement": { nameCN: "審判", general: { upright: "命運號角吹響，迎來重大覺醒與因果了結。做出改變一生的重大決定。", reversed: "處於逃避狀態。害怕跨出舒適圈而選擇拖延，錯失系統升級機會。" }, love: { upright: "感情上迎來破鏡重圓，或關係面臨重大昇華。走向命運交織的轉折。", reversed: "面對重複發生的致命問題依舊拒絕理智了斷。無意義地內耗。" }, work: { upright: "面臨關鍵裁決或重大轉機，迎來翻轉職業生涯的黃金職缺。", reversed: "因為猶豫不決錯失跳槽或晉升黃金期。過往失誤缺乏承擔勇氣。" } },
        "The World": { nameCN: "世界", general: { upright: "恭喜！本階段旅程已達到完美終點與大圓滿。代表成功與內心和諧。", reversed: "距離最後成功只剩最後一哩路，千萬不要在此時鬆懈，咬緊牙關完成。" }, love: { upright: "感情迎來最完美大結局。彼此靈魂達到天衣無縫的融合，最高規格祝福。", reversed: "大體上穩定幸福，但心中總覺得缺少臨門一腳的極致激情。" }, work: { upright: "事業達到顛峰狀態！交出無可挑剔的完美成績單。享受收穫期。", reversed: "專案已完成 99%，卻在最後驗收階段卡在繁瑣流程上。保持耐性。" } }
    };

    // ⚡ 核心擴充邏輯：自動將 56 張小阿爾克那套用對應元素的精準潛意識解讀範本，將數據完全補滿
    const elementTemplates = {
        "w": { element: "權杖 (火)", upright: "代表行動力爆發、全新計畫推進、熱情與創造性的能量流動。", reversed: "代表能量延遲、目標失焦、熱情耗盡或面臨無意義的內耗競爭。" },
        "c": { element: "聖杯 (水)", upright: "代表情感豐沛、人際和諧、直覺敏銳與潛意識情感的良性連結。", reversed: "代表情緒失控、情感壓抑、人際隔閡或沉溺於虛幻的不安想像中。" },
        "s": { element: "寶劍 (風)", upright: "代表理智清明、邏輯思維、決策果斷與突破思想迷霧的鋒芒。", reversed: "代表思緒混亂、言語衝突、精神壓力過大或陷入邏輯死胡同。" },
        "p": { element: "錢幣 (土)", upright: "代表物質富足、腳踏實地、計畫落地與穩健的核心資源累積。", reversed: "代表財務風險、眼光短淺、過度現實守舊或計畫缺乏物質支撐。" }
    };

    tarotCardsPool.forEach(card => {
        if (!meanings[card.name]) {
            const prefix = card.img.charAt(0);
            const template = elementTemplates[prefix] || { element: "元素", upright: "牌面能量正向流通。", reversed: "牌面能量受到壓抑阻礙。" };
            
            meanings[card.name] = {
                nameCN: card.nameCN,
                general: { 
                    upright: `[${template.element}] 核心暗示：${card.nameCN}正位。${template.upright}`, 
                    reversed: `[${template.element}] 核心暗示：${card.nameCN}逆位。${template.reversed}` 
                },
                love: { 
                    upright: `感情矩陣中，${card.nameCN}正位代表互動展現出穩定的元素流動，彼此溝通和諧、關係具備推進可能。`, 
                    reversed: `感情矩陣中，${card.nameCN}逆位警告當前關係存在溝通落差、情緒壓抑，或雙方步調產生不一致的制約。` 
                },
                work: { 
                    upright: `職場模型中，${card.nameCN}正位意味著當前專案或學業具備良好的底層支撐，執行力與資源正走向正軌。`, 
                    reversed: `職場模型中，${card.nameCN}逆位提示當前任務可能遭遇細節卡關、方向偏移，或資源調度出現短暫遲滯。` 
                }
            };
        }
    });

    return meanings;
}