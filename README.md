# Somnia

Somnia: Your AI companion for personal growth and well-being. Somnia helps you track health, goals, OCEAN scores, dreams, and provides tailored daily advice, guiding you toward a more balanced and fulfilling life.


# Jungian Companion App

## Core Idea
A personalized companion app based on Jungian psychology designed for older adults, focused on self-reflection, personal growth, and emotional well-being.

---

## Key Features

1. **Dynamic Persona Tracking**
   - Users’ personalities evolve over time based on actions, dreams, and reflections.
   - Example archetypes: Explorer, Hero, Dreamer, Shadow.
   - Personas are ranked dynamically in the database, tracking how often users embody each type.

2. **Dream Logging**
   - Users log dreams, which are summarized and linked to symbols and archetypal themes.
   - Examples: "Storms" tied to emotional conflict, "Light" to clarity.
   - Dreams influence persona rankings and provide tailored insights.

3. **Daily Logs**
   - Track habits (e.g., meditation, exercise), moods, and health stats in a simple, flexible format.
   - Example data: Completed habits, current emotional tone, reflections.

4. **Guided Journaling**
   - Prompts tailored to the user’s personas and recent patterns.
   - Example prompt: "Your dreams show storms and searching—what do you feel you're seeking today?"

5. **Personalized Responses via AI**
   - Integration with ChatGPT to provide tailored guidance.
   - Prompts include user context, like most active personas, recent dream summaries, and daily reflections.

6. **Cultural Adaptation**
   - Designed for specific markets, starting with older Mexican audiences.
   - Prompts and guidance in Mexican Spanish, addressing cultural nuances.

---

## User Engagement Schedule

1. **Morning Reflection (8:00 AM):**
   - **Alarm:** "¡Buenos días! ¿Qué intenciones tienes para hoy?"
   - **Action:** Set intentions for the day.

2. **Midday Reminder (12:30 PM):**
   - **Alarm:** "¿Cómo va tu día? Tómate un momento para reflexionar."
   - **Action:** Quick journaling on mood or thoughts.

3. **Evening Dream Prep (8:00 PM):**
   - **Alarm:** "Antes de dormir, piensa en lo que quieres encontrar en tus sueños."
   - **Action:** Reflect and set dream intentions.

4. **Weekly Reflection (Sunday, 9:00 AM):**
   - **Alarm:** "Es domingo, el momento perfecto para mirar atrás y ver cómo has crecido."
   - **Action:** Review weekly summaries.

---

## Database Overview

  ```
Table Users {
  user_id UUID [pk]
  username VARCHAR(50) [unique, not null]
  email VARCHAR(100) [unique, not null]
  password VARCHAR(255) [not null]
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table Persona {
  persona_id UUID [pk]
  user_id UUID [ref: > Users.user_id]
  persona_type VARCHAR(50) // e.g., "Archetype", "Shadow", "Habit"
  description TEXT
  associated_data JSON // Flexible field for extra details
  created_at TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table DreamLogs {
  dream_id UUID [pk]
  user_id UUID [ref: > Users.user_id]
  dream_date DATE
  description TEXT
  symbols JSON // JSON array of symbols/themes (e.g., ["water", "fire"])
  emotional_tone VARCHAR(50) // e.g., "Joyful", "Anxious"
}

Table DailyLogs {
  log_id UUID [pk]
  user_id UUID [ref: > Users.user_id]
  log_date DATE
  habits_completed JSON // JSON array of completed habits (e.g., ["Meditation", "Exercise"])
  health_stats JSON // JSON object for stats (e.g., {"weight": 68.5, "blood_pressure": "120/80"})
  mood VARCHAR(50) // e.g., "Calm", "Anxious"
  reflection TEXT
}

  ```

### Simplified Schema

1. **Users Table**
   - Core user data.

2. **Personas Table**
   - Tracks dynamic persona rankings (e.g., Explorer: 85, Shadow: 70).

3. **Dream Logs Table**
   - Stores full and summarized dreams, symbols, and emotional tones.

4. **Daily Logs Table**
   - Tracks habits, moods, and reflections.

### Dynamic Persona Ranking
- Personas are ranked and updated based on user behavior, dream themes, and reflections.

### Dream Summarization
- AI-generated summaries condense dream data for Retrieval-Augmented Generation (RAG).

---

## Market Potential

1. **Target Audience:**
   - Older adults seeking self-reflection and mindfulness tools.
   - Niche market: Individuals interested in Jungian psychology and dream analysis.

2. **Why It Works:**
   - Addresses loneliness and emotional growth.
   - Offers a unique blend of psychology, cultural adaptation, and AI.

3. **Monetization:**
   - Freemium model: Free basic features, paid insights, and archetype tracking.

---

## Next Steps

1. **Build Prototype:**
   - Basic journaling, dream logging, and persona ranking features.
   - Integrate ChatGPT for personalized responses.

2. **Test Alarms and Engagement:**
   - Trial the suggested alarm schedule with test users.

3. **Market Validation:**
   - Gather feedback from older adults and mental health professionals.
   - Explore partnerships with wellness communities.

4. **Launch Plan:**
   - Focus on culturally relevant markets like Mexico.
   - Use social media and wellness influencers for promotion.
5. RAG implementation 
    -Example RAG Prompt
    Structured Prompt for a Journal Entry
    
    ```
    You are a Jungian companion for the user. 
    
    ### User Context:
    - Most Active Personas: Explorer (85), Dreamer (65).
    - Last 3 Dream Summaries:
      1. "Dreamed of a vast ocean with a storm. Symbols: Ocean, Storm."
      2. "In a dark forest, found a glowing orb. Symbols: Forest, Light."
      3. "Flying above a city in chaos. Symbols: Flight, Chaos."
    
    ### Task:
    The user has added this journal entry: "I feel conflicted today. My dreams are full of storms, and I feel like I'm searching for something."
    
    Provide guidance to help the user connect their recent feelings and dreams with their active personas. Offer actionable advice for self-discovery.
    ```
