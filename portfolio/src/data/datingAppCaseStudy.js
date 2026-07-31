export const datingAppCaseStudy = {
  hero: {
    eyebrow: 'Case Study',
    title: 'Aligning Intentions and Accelerating Replies',
    summary:
      'A product concept for dating apps that reduces deceptive matches and stalled conversations by combining lightweight trust signals with inbox prioritization.',
    meta: ['Dating apps', 'Trust + engagement', 'Product case study'],
  },
  hook:
    'Dating apps do not only have a matching problem. They also have a trust problem and an inbox-quality problem.',
  problems: [
    {
      title: 'Intent mismatch after matching',
      description:
        'Users often signal long-term intent to get more matches, then reveal a very different goal once the conversation starts. Trust erodes fast.',
      accent: 'signal',
    },
    {
      title: 'Reply latency from match overload',
      description:
        'High-visibility profiles collect more conversations than they can realistically manage, which leaves thoughtful chats buried and other users feeling ignored.',
      accent: 'inbox',
    },
  ],
  personas: [
    {
      name: 'Riya',
      role: 'Serious-intent user',
      summary:
        'Receives heavy inbound attention, wants long-term alignment, and needs help spotting people who are actually serious before her inbox turns into noise.',
      accent: 'signal',
    },
    {
      name: 'Arjun',
      role: 'Flexible-intent user',
      summary:
        'Open to casual and serious dating, but benefits from clearer expectation-setting and feedback when his stated goal does not match how he behaves.',
      accent: 'inbox',
    },
  ],
  intentOverview:
    'The trust layer should not ask users for more setup upfront. It should learn from the exact moment a match breaks down and convert that frustration into a useful product signal.',
  intentSteps: [
    {
      id: 'unmatch-feedback',
      label: 'Signal',
      title: 'Capture intent mismatch at the moment of frustration',
      body:
        'When a chat ends, the app adds fast reasons like “Intentions misaligned” and “Slow / barely replied” so feedback stays low-effort and emotionally accurate.',
    },
    {
      id: 'intent-score',
      label: 'System',
      title: 'Translate repeated mismatch reports into a private trust read',
      body:
        'The app groups feedback into a few simple signals: what happened, how often it happens, and whether the same pattern shows up across separate matches.',
    },
    {
      id: 'visibility-impact',
      label: 'Outcome',
      title: 'Escalate from healthy distribution to reminder to lower reach',
      body:
        'Good behavior keeps distribution steady. Repeated mismatch reports first trigger a private reminder, and only sustained patterns reduce future reach.',
    },
  ],
  inboxOverview:
    'Inbox quality matters as much as match quantity. Ranking conversations by effort and responsiveness gives users a smaller set of better interactions to act on first.',
  inboxSteps: [
    {
      id: 'effort-ranked-inbox',
      label: 'Ranking',
      title: 'Sort conversations by message effort instead of raw volume',
      body:
        'Thoughtful openers that reference prompts or ask a specific question rise above generic one-line messages, helping good chats surface earlier.',
    },
    {
      id: 'reply-reminder',
      label: 'Prompt',
      title: 'Nudge users before strong conversations go cold',
      body:
        'A 24-hour reminder creates a simple choice: reply now or close the chat. The goal is to reduce accidental ghosting, not force more messaging.',
    },
    {
      id: 'idle-thread-control',
      label: 'Behavior',
      title: 'Treat repeated inactivity as part of inbox quality',
      body:
        'If a user repeatedly leaves promising threads idle, the system reduces their visibility so the rest of the ecosystem is not dragged down by backlog.',
    },
  ],
  signalReasons: [
    'Intentions misaligned',
    'Slow / barely replied',
    'Conversation felt misleading',
  ],
  scorePillars: [
    {
      label: 'What the app records',
      detail: 'Mismatch reason, frequency, and whether separate people report the same pattern.',
    },
    {
      label: 'What it ignores',
      detail: 'Single bad dates, one-off chemistry issues, or complaints without repeat evidence.',
    },
    {
      label: 'Why it stays private',
      detail: 'The signal only tunes ranking and reminders. No badge is shown on a public profile.',
    },
  ],
  exposureStates: [
    {
      label: 'Healthy visibility',
      tone: 'positive',
      detail: 'Normal distribution. Recent feedback does not show a repeat mismatch pattern.',
    },
    {
      label: 'Reminder sent',
      tone: 'neutral',
      detail: 'The app spots a growing pattern and asks the user to set clearer expectations.',
    },
    {
      label: 'Reduced visibility',
      tone: 'muted',
      detail: 'Only repeated reports across matches lower future reach until behavior improves.',
    },
  ],
  priorityThreads: [
    {
      name: 'Kabir',
      badge: 'High intent',
      preview: 'You mentioned Sunday books. Which genre keeps you hooked?',
    },
    {
      name: 'Aman',
      badge: 'Prompt-aware',
      preview: 'You said travel matters. Mountains or city weekends first?',
    },
    {
      name: 'Dev',
      badge: 'Low effort',
      preview: 'hey',
    },
  ],
  responseStates: [
    {
      title: 'Priority reply',
      note: 'Reply within 24h to keep this chat visible.',
    },
    {
      title: 'Soft nudge',
      note: 'Close or respond so the other side is not left waiting.',
    },
    {
      title: 'Visibility impact',
      note: 'Repeated idle threads reduce future exposure.',
    },
  ],
  metrics: [
    {
      label: 'Intent-mismatch complaints',
      target: '-30%',
    },
    {
      label: '24-hour first-reply rate',
      target: '45% -> 60%',
    },
    {
      label: 'Median reply latency',
      target: '-30%',
    },
    {
      label: 'Net Promoter Score',
      target: '+10 pts',
    },
    {
      label: '30-day retention',
      target: '+5 pts',
    },
    {
      label: 'Inbox quality confidence',
      target: 'Higher',
    },
  ],
  rollout: [
    'Log baseline mismatch and reply behavior before launching any new signal.',
    'Test the feedback loop and inbox logic internally with a closed cohort.',
    'Run a city-based A/B rollout on a limited market slice before scaling.',
    'Expand only if trust, reply speed, and retention move in the right direction.',
  ],
};
