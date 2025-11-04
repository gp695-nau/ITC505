// Game data structure with all story stages
const storyData = {
    // Stage 1 - Starting Point
    start: {
        text: "You stand at the edge of an ancient forest. The trees whisper secrets in languages forgotten by time. Two paths stretch before you: one bathed in golden sunlight filtering through emerald leaves, the other shrouded in mysterious mist that swirls with an otherworldly glow. Your adventure begins now...",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=400&fit=crop",
        choices: [
            { text: "Take the sunlit path", next: "sunlit_path" },
            { text: "Enter the misty path", next: "misty_path" }
        ]
    },
    
    // Stage 2 - Sunlit Path Branch
    sunlit_path: {
        text: "The sunlit path leads you to a crystal-clear stream that sparkles like liquid diamonds. A majestic deer with antlers adorned with flowering vines stands on the opposite bank, watching you intently with wise, knowing eyes. Nearby, you notice an old wooden bridge covered in moss and a row of smooth stepping stones across the water.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
        choices: [
            { text: "Approach the deer slowly and respectfully", next: "deer_encounter" },
            { text: "Cross using the stepping stones", next: "stones_path" }
        ]
    },
    
    // Stage 2 - Misty Path Branch
    misty_path: {
        text: "The mist swirls around you as you venture deeper into the mysterious forest. Through the fog, you spot flickering lights dancing between the trees - could they be fireflies or something more magical? The air tingles with enchantment. You also hear the faint sound of melodic music and laughter coming from a different direction, drawing you with its warmth.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop",
        choices: [
            { text: "Follow the mysterious dancing lights", next: "lights_path" },
            { text: "Head towards the music and laughter", next: "music_path" }
        ]
    },
    
    // Stage 3 - Deer Encounter Branch
    deer_encounter: {
        text: "As you approach with gentle steps, the deer speaks in a voice like wind through leaves: 'I am the Guardian of the Forest. Few show the respect you have shown today. For this, I offer you a choice: accept this vial of healing water from the sacred spring that grants long life and vitality, or receive knowledge of a hidden treasure that has waited centuries to be found.'",
        image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&h=400&fit=crop",
        choices: [
            { text: "Accept the vial of healing water", next: "ending_healer" },
            { text: "Ask for the treasure's location", next: "ending_treasure" }
        ]
    },
    
    // Stage 3 - Stepping Stones Branch
    stones_path: {
        text: "You carefully hop across the smooth stones, each step requiring perfect balance. Halfway across, something catches your eye beneath the crystal waters - ancient gold coins glinting in the sunlight! They must be worth a fortune. But as you pause, the current grows stronger, and you feel your balance wavering. The coins are just within reach...",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop",
        choices: [
            { text: "Quickly grab the coins", next: "ending_drowned" },
            { text: "Focus on crossing safely", next: "ending_wisdom" }
        ]
    },
    
    // Stage 3 - Fairy Lights Branch
    lights_path: {
        text: "The lights reveal themselves as beautiful fairies with iridescent wings! They dance around you in spirals of joy, their laughter like silver bells. 'Play with us! Dance with us!' they chime in harmony. But you notice their dance is leading you in circles, and the forest around you is growing darker. One fairy with violet eyes whispers close to your ear: 'Stay with us forever in eternal joy, or accept our parting gift and return to your world.'",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
        choices: [
            { text: "Join their eternal dance", next: "ending_fairy" },
            { text: "Accept their gift and leave", next: "ending_blessed" }
        ]
    },
    
    // Stage 3 - Music and Cottage Branch
    music_path: {
        text: "You discover a charming cottage with smoke curling from its chimney. Inside, through the window, you see a witch with kind eyes brewing colorful potions that bubble and steam. She looks up, sensing your presence, and opens the door with a warm smile. 'Ah, a visitor! How delightful. I'm creating something truly special today. Would you like to stay and become my apprentice in the magical arts, or would you prefer to simply share a meal and exchange stories as friends?'",
        image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=400&fit=crop",
        choices: [
            { text: "Become her apprentice in magic", next: "ending_sorcerer" },
            { text: "Share a meal and stories as friends", next: "ending_friend" }
        ]
    },
    
    // ENDINGS - Stage 4 (8 Different Endings)
    
    ending_healer: {
        text: "You accept the crystalline vial and drink the healing water. It tastes like morning dew and sunshine. A warm, golden sensation flows through every part of your body, filling you with vitality and light. The deer nods approvingly, its eyes gleaming with ancient wisdom. 'You have chosen compassion over wealth. Return to your world as a healer, blessed with the gift of long life and the power to cure ailments. Many will seek your help. Use your gift well.' You emerge from the forest forever changed, your hands now glowing faintly with healing energy. You dedicate your life to helping others, becoming a legendary healer whose name is spoken with reverence for generations.",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=400&fit=crop",
        ending: "🌟 THE HEALER 🌟"
    },
    
    ending_treasure: {
        text: "The deer's eyes sparkle as it draws a glowing map in the air with its antlers. 'Follow this path, but remember - true wealth is not measured in gold alone, but in the wisdom gained through your journey.' You commit the map to memory and follow it to a hidden cave behind a waterfall. Inside, you discover a chamber filled with gold coins, precious gems, ancient artifacts, and treasures beyond imagination. You carefully transport the wealth back to civilization, becoming extraordinarily rich. But you never forget the deer's words, and you use your fortune to fund libraries, schools, and aid for those in need, finding that the deer was right about the true nature of wealth.",
        image: "https://images.unsplash.com/photo-1609166214994-502d326bafee?w=800&h=400&fit=crop",
        ending: "💎 THE TREASURE HUNTER 💎"
    },
    
    ending_drowned: {
        text: "Unable to resist the lure of gold, you reach desperately for the coins. Your foot slips on the wet stone. Time seems to slow as you lose your balance completely. You tumble into the rushing water with a splash! The current is far stronger than you imagined. The coins sink away from your grasping fingers as the cold water pulls you under. You struggle, but the weight of your greed drags you down. As consciousness fades, you see the coins glittering mockingly on the riverbed beside you. The forest claims another soul who valued treasure over wisdom. The stream flows on, indifferent, carrying your story as a warning to future travelers.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
        ending: "💀 THE DROWNED 💀"
    },
    
    ending_wisdom: {
        text: "You take a deep breath and force yourself to look away from the tempting coins. With renewed focus, you carefully complete your crossing, each step deliberate and measured. As your feet touch solid ground on the far shore, an ancient tree spirit materializes before you, its form made of bark and living wood. 'You have passed the test of greed!' the spirit announces in a voice like rustling leaves. 'Many have fallen to temptation at that very spot. For your wisdom and self-control, I grant you the gift of foresight.' You feel your mind expanding, able to see truth hidden from others and to understand the consequences of choices before they're made. You return home and become a respected advisor, sought by leaders and common folk alike for your uncanny wisdom and insight.",
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop",
        ending: "🦉 THE WISE ONE 🦉"
    },
    
    ending_fairy: {
        text: "You surrender to the joy and begin dancing with the fairies. Their laughter becomes your laughter, their song your song. Time loses all meaning as you spin and twirl beneath the starlit canopy. Days pass like heartbeats, months like minutes, years like moments. Gradually, you feel yourself changing - your feet barely touch the ground, your laugh sounds like bells, your skin begins to shimmer. You are becoming one with the magic, forever young, forever joyful, forever dancing in the enchanted forest. You are happy beyond mortal understanding, but you are no longer quite human. The forest has accepted you as its own, and you have become an eternal guardian of its magic, welcoming future travelers with your dance.",
        image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&h=400&fit=crop",
        ending: "✨ THE ETERNAL DANCER ✨"
    },
    
    ending_blessed: {
        text: "You thank the fairies for their wonderful dance but explain that you must return to your own world. They seem sad but understanding. The violet-eyed fairy flies close and presses a small, glowing crystal into your palm. 'Then take this with you,' she whispers. 'May fortune smile upon all your endeavors.' As you leave the forest, the crystal's warm glow fades but does not disappear entirely. In the days and weeks that follow, you discover the true nature of their gift - everything you attempt seems to work out perfectly. Lucky coincidences become common. Opportunities appear exactly when needed. You live a blessed life, always fortunate, always successful in your ventures. You never forget the magical beings who showed you such kindness, and you pass on your good fortune by helping others whenever possible.",
        image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=400&fit=crop",
        ending: "🍀 THE BLESSED 🍀"
    },
    
    ending_sorcerer: {
        text: "You accept the witch's offer and step into her cottage. The years that follow are filled with wonder and learning. She teaches you to brew potions that heal and transform, to speak with animals and plants, to read the stars and predict the weather, to craft charms and break curses. You study ancient tomes filled with forgotten knowledge. Gradually, your own power grows until it rivals your teacher's. Eventually, she smiles proudly and tells you it is time to establish your own practice. You become a powerful sorcerer in your own right, respected and feared, using your magic to maintain the delicate balance between the magical and mortal worlds. Adventurers and kings seek your counsel, and your name becomes legend.",
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=400&fit=crop",
        ending: "🔮 THE SORCERER 🔮"
    },
    
    ending_friend: {
        text: "You politely decline the apprenticeship but happily accept the offer of friendship. The witch's face lights up with genuine joy. 'Wonderful! So few choose connection over power these days.' You share a magnificent meal together - mushroom soup, fresh bread, herb tea, and berry pie. You exchange stories late into the night, laughing and talking like old friends. As you prepare to leave at dawn, the witch presses a small cloth bag into your hands. 'You passed my test,' she reveals. 'Many seek magic for power, but you sought simple human connection. This is a seed from the Tree of Joy. Plant it with love.' You return home and plant the magical seed. It grows into a magnificent tree bearing golden fruit that grants happiness and contentment to all who eat it. People travel from far and wide to taste its fruit, and you become known as the Keeper of Joy, the one who brought happiness to the world through a simple act of friendship.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
        ending: "😊 THE JOY KEEPER 😊"
    }
};

// Current game state
let currentStage = 'start';

// Start or restart the game
function startGame() {
    currentStage = 'start';
    updatePage();
}

// Update the page with current story stage
function updatePage() {
    const stage = storyData[currentStage];
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');
    const storyImage = document.getElementById('story-image');

    // Fade out image before changing
    storyImage.style.opacity = '0';
    
    setTimeout(() => {
        // Update image
        storyImage.src = stage.image;
        storyImage.alt = "Story scene";
        
        // Fade in new image
        storyImage.style.opacity = '1';
    }, 300);

    // Update story text
    storyText.innerHTML = stage.text;

    // Clear previous choices
    choicesDiv.innerHTML = '';

    // Check if this is an ending
    if (stage.ending) {
        endGame(stage.ending);
    } else {
        // Create choice buttons with staggered animation
        stage.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.style.animationDelay = `${index * 0.1}s`;
            
            button.addEventListener('click', () => {
                currentStage = choice.next;
                updatePage();
            });
            
            choicesDiv.appendChild(button);
        });
    }
}

// End the game and show ending
function endGame(endingTitle) {
    const choicesDiv = document.getElementById('choices');
    const storyText = document.getElementById('story-text');
    
    // Add ending title at the top
    const title = document.createElement('div');
    title.className = 'ending-title';
    title.textContent = endingTitle;
    storyText.insertBefore(title, storyText.firstChild);

    // Create restart button
    const restartBtn = document.createElement('button');
    restartBtn.className = 'choice-btn restart-btn';
    restartBtn.textContent = '🔄 Play Again';
    restartBtn.addEventListener('click', startGame);
    choicesDiv.appendChild(restartBtn);
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', startGame);