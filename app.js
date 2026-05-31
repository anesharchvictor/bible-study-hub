// ==========================================
// 📖 MULTI-BOOK CHAPTER INDEX DATABASE
// ==========================================
const CHAPTERS_DB = [
  {
    id: "ez-1",
    num: "Ezekiel 1",
    title: "Vision of the Glory of God",
    desc: "Ezekiel beholds the high-fidelity storm cloud, the four multi-faced living creatures (Cherubim), the terrifying whirling wheels inside wheels, and the absolute glory of God's throne above the expanse.",
    category: "vision",
    keywords: ["glory", "cherubim", "wheels", "expanse", "chariot", "eyes", "four faces", "storm", "throne"],
    citation: "Study the Bible/Wiki/Ezekiel/Ezekiel 1 - Vision of the Glory of God"
  },
  {
    id: "ez-2-3",
    num: "Ezekiel 2 & 3",
    title: "Call of the Prophet & Watchman",
    desc: "God commissions Ezekiel by instructing him to eat a scroll tasting of honey. He is appointed as a watchman over Israel, loaded with the warning: blow the horn to sound judgment, or blood-guilt falls on your own head.",
    category: "judgment",
    keywords: ["watchman", "scroll", "warning", "sound the alarm", "judgment", "eat the scroll", "blood-guilt", "commission"],
    citation: "Study the Bible/Wiki/Ezekiel/Ezekiel 2 and 3 - The Call of the Prophet and Watchman"
  },
  {
    id: "ez-4",
    num: "Ezekiel 4",
    title: "The Clay Brick & Defiled Bread",
    desc: "Ezekiel acts out the siege of Jerusalem by drawing it on a clay brick. He lies bound on his side for 430 days, baking bread over cow dung, depicting the terrible famine and defilement of captivity.",
    category: "judgment",
    keywords: ["clay brick", "bread", "siege", "dung", "lying on side", "430 days", "famine", "defilement"],
    citation: "Study the Bible/Wiki/Ezekiel/Ezekiel 4 - The Clay Brick and Defiled Bread"
  },
  {
    id: "ez-37",
    num: "Ezekiel 37",
    title: "The Valley of Dry Bones",
    desc: "Ezekiel is carried to a valley filled with dry, dead bones. As he prophesies, wind sweeps in, knitting sinews and flesh, raising a mighty army. Followed by the stick illustration joining Judah and Joseph.",
    category: "hope",
    keywords: ["dry bones", "valley", "breath", "army", "sinews", "prophesy to the wind", "two sticks", "judah and joseph", "one shepherd"],
    citation: "Study the Bible/Wiki/Ezekiel/Ezekiel 37 - The Valley of Dry Bones and the Two Sticks"
  },
  {
    id: "dan-1",
    num: "Daniel 1",
    title: "Nebuchadnezzar's Training",
    desc: "Daniel and his three friends are selected for training in Babylon. They refuse to eat the king's rich food and wine offered to idols, opting for a 10-day trial of vegetables and water, proving healthier than all others.",
    category: "hope",
    keywords: ["training", "vegetables", "diet", "10 days", "favor", "babylon", "wisdom", "intimacy"],
    citation: "Study the Bible/Wiki/Daniel/Daniel 1 - Nebuchadnezzars Training"
  },
  {
    id: "dan-2",
    num: "Daniel 2",
    title: "Nebuchadnezzar's Image Dream",
    desc: "Daniel interprets Nebuchadnezzar's disturbing dream of a giant statue made of gold, silver, bronze, iron, and clay, which is smashed by a supernatural rock representing Christ's eternal kingdom.",
    category: "vision",
    keywords: ["dream", "statue", "gold", "silver", "bronze", "iron", "rock", "kingdom", "babylon", "revelation"],
    citation: "Study the Bible/Wiki/Daniel/Daniel 2 - Nebuchadnezzars Image Dream"
  },
  {
    id: "dan-6",
    num: "Daniel 6",
    title: "Daniel in the Lions' Den",
    desc: "Daniel is thrown into a den of lions for praying to God despite Darius's decree. God sends an angel to shut the lions' mouths, leading to Daniel's miraculous rescue and promotion.",
    category: "hope",
    keywords: ["lions den", "prayer", "darius", "angels", "rescue", "trap", "faithfulness", "intimacy"],
    citation: "Study the Bible/Wiki/Daniel/Daniel 6 - Daniel in the Lions Den"
  },
  {
    id: "jer-1",
    num: "Jeremiah 1",
    title: "The Prophet's Call and Visions",
    desc: "God calls Jeremiah from the womb to be a prophet to the nations. Jeremiah receives visions of a branch of an almond tree and a boiling pot spilling from the north, representing coming judgment.",
    category: "vision",
    keywords: ["call", "almond tree", "boiling pot", "north", "young", "mouth", "touch", "prophecy"],
    citation: "Study the Bible/Wiki/Jeremiah/Jeremiah 1 - The Prophets Call and Visions"
  },
  {
    id: "jer-18",
    num: "Jeremiah 18",
    title: "The Potter and the Clay",
    desc: "God directs Jeremiah to a potter's house to witness clay being reworked, illustrating God's absolute sovereignty over nations to build or destroy them based on their repentance.",
    category: "judgment",
    keywords: ["potter", "clay", "wheel", "sovereignty", "ruin", "repentance", "warning"],
    citation: "Study the Bible/Wiki/Jeremiah/Jeremiah 18 - The Potter and the Clay"
  },
  {
    id: "jer-31",
    num: "Jeremiah 31",
    title: "The New Covenant and Everlasting Love",
    desc: "God declares His everlasting love for Israel, promising a New Covenant where His laws will be written directly on their hearts, leading to total restoration, joy, and forgiveness.",
    category: "hope",
    keywords: ["new covenant", "everlasting love", "heart", "restore", "rachel weeping", "joy", "covenant"],
    citation: "Study the Bible/Wiki/Jeremiah/Jeremiah 31 - The New Covenant and Everlasting Love"
  },
  {
    id: "sol-1",
    num: "Solomon 1",
    title: "Courtship and Sunburn",
    desc: "The Shulamite bride expresses her passionate love for the king, feeling self-conscious about her dark complexion from working in her brothers' vineyards but lovely in the eyes of her beloved.",
    category: "intimacy",
    keywords: ["courtship", "sunburn", "dark", "lovely", "chambers", "kisses", "wine", "beloved", "intimacy"],
    citation: "Study the Bible/Wiki/Song_of_Solomon/Solomon 1 - Courtship and Sunburn"
  },
  {
    id: "sol-8",
    num: "Solomon 8",
    title: "Passion of Mature Oneness",
    desc: "The bride requests to be placed as a seal over her beloved's heart and arm, declaring that love is as strong as death, unquenchable by floods, and worth more than all earthly wealth.",
    category: "intimacy",
    keywords: ["passion", "oneness", "seal", "love", "death", "waters", "flames", "vineyard", "intimacy"],
    citation: "Study the Bible/Wiki/Song_of_Solomon/Solomon 8 - Passion of Mature Oneness"
  }
];

// ==========================================
// 🏆 EXPANDED TRIVIA CHALLENGE POOL (15 Qs)
// ==========================================
const TRIVIA_POOL = [
  {
    question: "In Ezekiel 2 and 3, what sweet-tasting object does God command the prophet to eat before warning Israel?",
    options: [
      "A piece of honey cake",
      "A written scroll",
      "A piece of defiled bread",
      "A cluster of figs"
    ],
    correct: 1,
    chapter: "Ezekiel 2 and 3"
  },
  {
    question: "What physical object does Ezekiel use in Chapter 4 to sketch the siege lines of Jerusalem?",
    options: [
      "A bronze plate",
      "A clay brick",
      "A piece of cedar wood",
      "A shield"
    ],
    correct: 1,
    chapter: "Ezekiel 4"
  },
  {
    question: "Ezekiel 9 features a scribe carrying what writing instrument, used to mark the remnant's foreheads?",
    options: [
      "An iron stylus",
      "A bronze measuring rod",
      "A writer's inkhorn",
      "A golden quill"
    ],
    correct: 2,
    chapter: "Ezekiel 9"
  },
  {
    question: "What comes into the valley of dry bones in Ezekiel 37 to bring the skeletal army back to life?",
    options: [
      "Coals of fire from the Cherubim",
      "The breath/wind (Ruach) from the four winds",
      "A wave of clean water",
      "A voice from the temple threshold"
    ],
    correct: 1,
    chapter: "Ezekiel 37"
  },
  {
    question: "In Ezekiel 1, how many faces does each of the four living creatures (Cherubim) have?",
    options: [
      "One face",
      "Two faces",
      "Four faces (Man, Lion, Ox, Eagle)",
      "Six faces"
    ],
    correct: 2,
    chapter: "Ezekiel 1"
  },
  {
    question: "In Daniel 6, what animal's mouth does God send an angel to shut to protect Daniel?",
    options: [
      "Bears",
      "Lions",
      "Leopards",
      "Wolves"
    ],
    correct: 1,
    chapter: "Daniel 6"
  },
  {
    question: "In Daniel 2, what material is the head of the giant statue in Nebuchadnezzar's dream made of?",
    options: [
      "Silver",
      "Bronze",
      "Iron",
      "Gold"
    ],
    correct: 3,
    chapter: "Daniel 2"
  },
  {
    question: "In Daniel 1, what diet do Daniel and his three friends eat during their 10-day trial in Babylon?",
    options: [
      "Rich royal food and wine",
      "Barley cakes and milk",
      "Vegetables and water",
      "Figs and grape juice"
    ],
    correct: 2,
    chapter: "Daniel 1"
  },
  {
    question: "In Jeremiah 18, what craftsman does God instruct Jeremiah to visit to learn about His sovereignty?",
    options: [
      "A blacksmith",
      "A carpenter",
      "A potter",
      "A mason"
    ],
    correct: 2,
    chapter: "Jeremiah 18"
  },
  {
    question: "According to Jeremiah 31, where will God write His law under the New Covenant?",
    options: [
      "On tablets of stone",
      "On their hearts",
      "On the temple gates",
      "On scroll parchments"
    ],
    correct: 1,
    chapter: "Jeremiah 31"
  },
  {
    question: "In Song of Solomon 8, love is described as being as strong as which of the following?",
    options: [
      "An army with banners",
      "The waves of the sea",
      "Death",
      "A fortified wall"
    ],
    correct: 2,
    chapter: "Song of Solomon 8"
  },
  {
    question: "In Song of Solomon 1, the bride's complexion is dark because she was forced to work in which location?",
    options: [
      "The palace kitchens",
      "Her brothers' vineyards",
      "The olive presses",
      "The brick kilns"
    ],
    correct: 1,
    chapter: "Song of Solomon 1"
  }
];

// ==========================================
// ⚡ CORE APP STATE MANAGEMENT
// ==========================================
let activeTriviaQuestions = []; // Dynamically populated and shuffled 5-question pool
let currentQuestionIndex = 0;
let triviaScore = 0;
let triviaAnswersDisabled = false;

// Stop-words list to filter out noise in natural language queries
const STOP_WORDS = new Set([
  "the", "a", "an", "is", "are", "was", "were", "what", "who", "where", "how", "why", "about", 
  "tell", "me", "to", "of", "and", "in", "on", "at", "for", "with", "this", "that", "you", 
  "your", "i", "he", "she", "it", "they", "we", "can", "do", "does", "did", "please", "discuss"
]);

// ==========================================
// 🎯 INITIALIZATION & DOM SELECTION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderChaptersList("all");
  setupCarouselFilters();
  setupQAGateway();
  setupHabitTracker();
  initTriviaGame();
  setupTriviaActions();
  setupModalControllers();
  setupScrollAnimationFallback();
});

// ==========================================
// 📖 EXPLORER CAROUSEL MODULE
// ==========================================
function renderChaptersList(filter) {
  const container = document.getElementById("chapter-scroller");
  container.innerHTML = "";
  
  const filtered = filter === "all" 
    ? CHAPTERS_DB 
    : CHAPTERS_DB.filter(ch => ch.category === filter);

  filtered.forEach(ch => {
    const li = document.createElement("li");
    li.className = "chapter-card entry";
    li.innerHTML = `
      <div class="chapter-badge">${ch.num}</div>
      <h3>${ch.title}</h3>
      <p class="chapter-desc">${ch.desc}</p>
      <div class="chapter-meta">
        <span class="chapter-tag">${ch.category}</span>
        <span>View Details 📖</span>
      </div>
    `;
    // FIX: Click opens a premium modal dialog instead of overwriting left Q&A gateway!
    li.addEventListener("click", () => {
      openChapterModal(ch);
    });
    container.appendChild(li);
  });
}

function setupCarouselFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      buttons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      renderChaptersList(e.target.dataset.filter);
    });
  });
}

// ==========================================
// 🏛️ PREMIUM CHAPTER OVERLAY DIALOG MODAL
// ==========================================
function openChapterModal(chapterObj) {
  const dialog = document.getElementById("chapter-dialog");
  const modalBody = document.getElementById("modal-body");
  
  // Format keywords into visual tags
  const keywordsHtml = chapterObj.keywords
    .map(key => `<span class="modal-keyword-tag">#${key}</span>`)
    .join(" ");

  modalBody.innerHTML = `
    <div class="modal-chapter-header">
      <div class="modal-chapter-badge">${chapterObj.num}</div>
      <h2 class="modal-chapter-title">${chapterObj.title}</h2>
    </div>
    <p class="modal-chapter-desc">${chapterObj.desc}</p>
    <div class="modal-chapter-keywords">
      ${keywordsHtml}
    </div>
    <div class="modal-chapter-footer">
      📚 <strong>Obsidian Node Reference:</strong><br>
      <a href="#" onclick="return false;">file:///${chapterObj.citation}.md</a>
    </div>
  `;

  // Native show modal command with backdrop blur activation
  dialog.showModal();
}

function setupModalControllers() {
  const dialog = document.getElementById("chapter-dialog");
  const closeBtn = document.getElementById("modal-close-btn");

  closeBtn.addEventListener("click", () => dialog.close());

  // Close modal when clicking outside on the backdrop
  dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}

// ==========================================
// ⚡ OPTIMIZED SEMANTIC Q&A GATEWAY
// ==========================================
function setupQAGateway() {
  const queryInput = document.getElementById("qa-query");
  const submitBtn = document.getElementById("qa-submit-btn");
  
  submitBtn.addEventListener("click", () => handleQuerySubmit(queryInput.value));
  
  queryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleQuerySubmit(queryInput.value);
  });

  document.querySelectorAll(".suggestion-tag").forEach(tag => {
    tag.addEventListener("click", (e) => {
      queryInput.value = e.target.dataset.query;
      handleQuerySubmit(e.target.dataset.query);
    });
  });
}

function handleQuerySubmit(queryText) {
  if (!queryText.trim()) return;

  const responseBox = document.getElementById("qa-response");
  const responseText = document.getElementById("qa-response-text");
  const responseCitation = document.getElementById("qa-response-citation");
  
  responseBox.classList.remove("hidden");
  responseText.innerHTML = "";
  responseCitation.innerHTML = "";
  responseBox.scrollIntoView({ behavior: "smooth", block: "nearest" });

  const statusText = responseBox.querySelector(".status-text");
  statusText.textContent = "Querying Personal Digital Ark Manifest...";

  setTimeout(() => {
    statusText.textContent = "Stitching Semantic Knowledge Graph...";
    
    setTimeout(() => {
      statusText.textContent = "Response Synthesized";
      
      // FIX: Clean and tokenize user query, filtering out punctuation and common stop-words
      const searchTerms = queryText.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
        .split(/\s+/)
        .filter(term => term.length > 2 && !STOP_WORDS.has(term));

      let bestMatch = null;
      let highestScore = 0;

      CHAPTERS_DB.forEach(ch => {
        let score = 0;
        
        // 1. Keyword level matching with high weights
        ch.keywords.forEach(keyword => {
          const kwWords = keyword.toLowerCase().split(/\s+/);
          searchTerms.forEach(term => {
            if (kwWords.some(kw => kw === term || kw.startsWith(term) || term.startsWith(kw))) {
              score += 2; // Word-level match weight
            }
          });
        });

        // 2. Title matching with highest weight to prevent false category matches
        const titleWords = ch.title.toLowerCase().split(/\s+/);
        searchTerms.forEach(term => {
          if (titleWords.some(tw => tw.includes(term))) {
            score += 4; // High-level title weight
          }
        });

        if (score > highestScore) {
          highestScore = score;
          bestMatch = ch;
        }
      });

      // 3. Typings Animation Response
      if (bestMatch && highestScore > 0) {
        typeWriterResponse(
          `Based on local Medallion archives, **${bestMatch.num}** directly discusses this topic. Ezekiel maps out: ${bestMatch.desc}`,
          bestMatch.citation,
          responseText,
          responseCitation
        );
      } else {
        typeWriterResponse(
          `No exact keyword match was found in the consolidated indices for: "${queryText}". However, you can query major themes in **Ezekiel 1** (Glory), **Ezekiel 33** (Watchman Warning), **Ezekiel 37** (Dry Bones Restoration), or **Ezekiel 40-43** (New Temple measurements).`,
          "Study the Bible/Wiki/index",
          responseText,
          responseCitation
        );
      }

    }, 800);
  }, 700);
}

function typeWriterResponse(text, citation, textContainer, citationContainer) {
  let index = 0;
  textContainer.innerHTML = "";
  
  const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  const timer = setInterval(() => {
    if (index < formattedText.length) {
      if (formattedText[index] === '<') {
        const closingIndex = formattedText.indexOf('>', index);
        textContainer.innerHTML += formattedText.slice(index, closingIndex + 1);
        index = closingIndex + 1;
      } else {
        textContainer.innerHTML += formattedText[index];
        index++;
      }
    } else {
      clearInterval(timer);
      citationContainer.innerHTML = `📚 <strong>File Citation:</strong> <a href="#" onclick="return false;">${citation}.md</a>`;
    }
  }, 10);
}

// ==========================================
// 🏆 TRIVIA CHALLENGE MODULE (RANDOMIZED 5 Qs)
// ==========================================
function initTriviaGame() {
  // FIX: Dynamic shuffling & selection of exactly 5 trivia questions from our expanded 10-question pool
  activeTriviaQuestions = [...TRIVIA_POOL]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  currentQuestionIndex = 0;
  triviaScore = 0;
  document.getElementById("trivia-score").textContent = "0";
  document.getElementById("trivia-game").classList.remove("hidden");
  document.getElementById("trivia-results-screen").classList.add("hidden");
  loadTriviaQuestion();
}

function loadTriviaQuestion() {
  if (currentQuestionIndex >= activeTriviaQuestions.length) {
    showTriviaResults();
    return;
  }

  triviaAnswersDisabled = false;
  document.getElementById("trivia-next-btn").classList.add("hidden");
  
  const currentQ = activeTriviaQuestions[currentQuestionIndex];
  
  // Progress indicators
  document.getElementById("trivia-current-q").textContent = `Question ${currentQuestionIndex + 1} of ${activeTriviaQuestions.length}`;
  const percentage = ((currentQuestionIndex + 1) / activeTriviaQuestions.length) * 100;
  document.getElementById("trivia-progress-bar").style.width = `${percentage}%`;

  // Question render
  document.getElementById("trivia-question").innerHTML = `<strong>Q:</strong> ${currentQ.question}`;

  // Options render
  const optionsBox = document.getElementById("trivia-options");
  optionsBox.innerHTML = "";
  
  currentQ.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "trivia-option";
    btn.type = "button";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleTriviaAnswerSelect(idx, btn));
    optionsBox.appendChild(btn);
  });
}

function handleTriviaAnswerSelect(selectedIndex, selectedBtn) {
  if (triviaAnswersDisabled) return;
  triviaAnswersDisabled = true;

  const currentQ = activeTriviaQuestions[currentQuestionIndex];
  const options = document.querySelectorAll(".trivia-option");
  
  options.forEach((btn) => btn.classList.add("disabled"));

  if (selectedIndex === currentQ.correct) {
    selectedBtn.classList.add("correct");
    triviaScore++;
    document.getElementById("trivia-score").textContent = triviaScore;
    triggerConfettiBurst(15);
  } else {
    selectedBtn.classList.add("wrong");
    options[currentQ.correct].classList.add("correct");
  }

  document.getElementById("trivia-next-btn").classList.remove("hidden");
}

function setupTriviaActions() {
  document.getElementById("trivia-next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    loadTriviaQuestion();
  });

  document.getElementById("trivia-restart-btn").addEventListener("click", () => {
    initTriviaGame(); // Shuffles a fresh batch of 5 questions!
  });
}

function showTriviaResults() {
  document.getElementById("trivia-game").classList.add("hidden");
  document.getElementById("trivia-results-screen").classList.remove("hidden");
  document.getElementById("final-score").textContent = triviaScore;

  if (triviaScore === activeTriviaQuestions.length) {
    triggerConfettiBurst(120); // Big wins confetti spray!
  } else if (triviaScore >= 3) {
    triggerConfettiBurst(50);
  }
}

// ==========================================
// 🌱 DAILY REFLECTION HABIT BUILDER
// ==========================================
function setupHabitTracker() {
  const checkBtn = document.getElementById("habit-check-btn");
  const streakCountEl = document.getElementById("streak-count");
  
  let streak = parseInt(localStorage.getItem("pda_streak") || "0", 10);
  let lastCheckedDate = localStorage.getItem("pda_last_checked");
  
  const today = new Date().toDateString();
  
  streakCountEl.textContent = streak;

  if (lastCheckedDate === today) {
    checkBtn.textContent = "Milestone Met Today ✔";
    checkBtn.classList.add("checked-in");
  }

  checkBtn.addEventListener("click", () => {
    if (checkBtn.classList.contains("checked-in")) return;
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastCheckedDate === yesterdayStr) {
      streak += 1;
    } else if (lastCheckedDate !== today) {
      streak = 1;
    }

    localStorage.setItem("pda_streak", streak);
    localStorage.setItem("pda_last_checked", today);
    
    streakCountEl.textContent = streak;
    checkBtn.textContent = "Milestone Met Today ✔";
    checkBtn.classList.add("checked-in");
    
    triggerConfettiBurst(40);
  });
}

// ==========================================
// 🎨 CONFETTI CELEBRATION COMPONENT
// ==========================================
function triggerConfettiBurst(amount) {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#4f46e5", "#c084fc", "#f59e0b", "#10b981", "#ef4444"];

  for (let i = 0; i < amount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height + 20,
      radius: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI - Math.PI,
      speed: Math.random() * 12 + 8,
      gravity: 0.35,
      friction: 0.98,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5
    });
  }

  let animationFrameId;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let active = false;

    particles.forEach(p => {
      p.speed *= p.friction;
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed + p.gravity;
      p.gravity += 0.05;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
      ctx.restore();

      if (p.y < canvas.height && p.x > 0 && p.x < canvas.width) {
        active = true;
      }
    });

    if (active) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  animate();
}

// ==========================================
// 🌊 SCROLLER FALLBACK COMPONENT
// ==========================================
function setupScrollAnimationFallback() {
  if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
    const scroller = document.getElementById("chapter-scroller");
    
    const tick = () => {
      const scrollerRect = scroller.getBoundingClientRect();
      const entries = scroller.querySelectorAll(".chapter-card");

      entries.forEach(entry => {
        const entryRect = entry.getBoundingClientRect();
        const centerOffset = entryRect.left + entryRect.width / 2 - scrollerRect.left - scrollerRect.width / 2;
        const normalized = Math.max(0, 1 - Math.abs(centerOffset) / (scrollerRect.width * 0.7));
        
        const scaleVal = 0.92 + normalized * 0.08;
        const opacityVal = 0.6 + normalized * 0.4;
        const borderGlow = normalized * 0.15;
        
        entry.style.transform = `scale(${scaleVal})`;
        entry.style.opacity = opacityVal;
        entry.style.borderColor = `rgba(255, 255, 255, ${0.06 + borderGlow})`;
      });
    };

    scroller.addEventListener("scroll", tick);
    window.addEventListener("resize", tick);
    setTimeout(tick, 200);
  }
}
