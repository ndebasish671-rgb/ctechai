// Sample editorial content for CTechAI.
// All products, brands, and reviews below are fictional placeholders used to
// demonstrate the site layout. Replace or connect a CMS to publish real content.

export type SectionSlug = 'reviews' | 'news' | 'best' | 'how-to';

export type CategorySlug =
  | 'computers'
  | 'phones'
  | 'tvs'
  | 'audio'
  | 'gaming'
  | 'smart-home'
  | 'software'
  | 'ai';

export interface Section {
  slug: SectionSlug;
  name: string;
  description: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  hue: [string, string];
}

export interface Article {
  slug: string;
  title: string;
  dek: string;
  section: SectionSlug;
  category: CategorySlug;
  author: string;
  date: string; // ISO date (YYYY-MM-DD)
  readMinutes: number;
  rating?: number; // out of 5, reviews only
  editorsChoice?: boolean;
  price?: string;
  verdict?: string;
  pros?: string[];
  cons?: string[];
  featured?: boolean;
  hue: [string, string];
  body: string[];
}

export const SECTIONS: Section[] = [
  {
    slug: 'reviews',
    name: 'Reviews',
    description: 'In-depth hands-on tests of the latest gadgets, scored against real-world use.',
  },
  {
    slug: 'news',
    name: 'News',
    description: 'The biggest stories from tech companies, chipmakers, platforms, and the AI race.',
  },
  {
    slug: 'best',
    name: 'Best Products',
    description: 'Our top picks in every category, updated as new products launch.',
  },
  {
    slug: 'how-to',
    name: 'How-To',
    description: 'Step-by-step guides to get more out of the devices and software you already own.',
  },
];

export const CATEGORIES: Category[] = [
  {
    slug: 'computers',
    name: 'Laptops & PCs',
    description: 'Laptops, desktops, monitors, and the chips that power them.',
    hue: ['#1d4ed8', '#38bdf8'],
  },
  {
    slug: 'phones',
    name: 'Phones & Tablets',
    description: 'Smartphones, tablets, and the accessories that go with them.',
    hue: ['#be185d', '#fb7185'],
  },
  {
    slug: 'tvs',
    name: 'TVs & Home Theater',
    description: 'Televisions, projectors, streaming devices, and soundbars.',
    hue: ['#7c3aed', '#c084fc'],
  },
  {
    slug: 'audio',
    name: 'Audio',
    description: 'Headphones, earbuds, speakers, and everything that makes noise worth hearing.',
    hue: ['#b45309', '#fbbf24'],
  },
  {
    slug: 'gaming',
    name: 'Gaming',
    description: 'Consoles, handhelds, controllers, and gaming PCs.',
    hue: ['#047857', '#34d399'],
  },
  {
    slug: 'smart-home',
    name: 'Smart Home',
    description: 'Thermostats, cameras, locks, lights, and home networking.',
    hue: ['#0e7490', '#67e8f9'],
  },
  {
    slug: 'software',
    name: 'Software & Security',
    description: 'Operating systems, apps, antivirus, and privacy tools.',
    hue: ['#334155', '#94a3b8'],
  },
  {
    slug: 'ai',
    name: 'AI & Apps',
    description: 'AI assistants, generative tools, and the apps putting them in your pocket.',
    hue: ['#4338ca', '#a5b4fc'],
  },
];

const ARTICLES: Article[] = [
  // ---------- Reviews ----------
  {
    slug: 'nova-book-14-review',
    title: 'Nova Book 14 Review: A Sharp Ultraportable That Runs Cool',
    dek: 'A 14-inch laptop with a brilliant OLED screen, all-day battery life, and a keyboard we could type on for hours.',
    section: 'reviews',
    category: 'computers',
    author: 'Maya Chen',
    date: '2026-11-04',
    readMinutes: 9,
    rating: 4.5,
    editorsChoice: true,
    price: '$1,199',
    featured: true,
    verdict:
      'The Nova Book 14 sets a new bar for lightweight laptops. Its display, battery, and keyboard are excellent, and its fans stay quiet even under sustained load.',
    pros: ['Gorgeous 2.8K OLED display', 'Up to 16 hours of mixed-use battery', 'Quiet, cool under load', 'Comfortable keyboard and large trackpad'],
    cons: ['Only two USB-C ports', 'Speakers lack bass', 'Base model has 256GB of storage'],
    hue: ['#1d4ed8', '#38bdf8'],
    body: [
      'Nova has built its reputation on thin, quiet machines, and the Book 14 continues that tradition. At 2.9 pounds, it is light enough to carry all day, yet its aluminum chassis feels rigid when you open it with one hand.',
      'The star of the show is the 14-inch OLED panel. Its 2.8K resolution and 120Hz refresh rate make scrolling feel fluid, and colors are accurate out of the box. In our tests it measured a Delta E below 1 in the sRGB gamut, which makes it a strong pick for photo editing on the go.',
      'Battery life was the surprise. In our looping web-browsing test with the screen at 200 nits, the Book 14 lasted just over 16 hours. Real-world use with email, video calls, and document editing typically landed between 10 and 12 hours. The charger is compact and tops the battery up to 60 percent in about 30 minutes.',
      'The trade-offs are modest. You get only two USB-C ports and no full-size HDMI, so you will want a dock if you use multiple peripherals. The speakers are clear but thin. Still, for most buyers this is the laptop we would recommend first.',
    ],
  },
  {
    slug: 'orbis-phone-9-pro-review',
    title: 'Orbis Phone 9 Pro Review: Great Cameras, Slightly Pricey',
    dek: 'The Phone 9 Pro takes superb photos in almost any light, but its software still has a few rough edges.',
    section: 'reviews',
    category: 'phones',
    author: 'Dev Patel',
    date: '2026-11-03',
    readMinutes: 8,
    rating: 4.0,
    price: '$999',
    verdict:
      'A camera-first flagship with a superb 6.7-inch display and strong all-day battery life. It is held back by a high price and occasional software hiccups.',
    pros: ['Best-in-class low-light photos', 'Bright, smooth 120Hz display', 'Seven years of OS and security updates'],
    cons: ['Expensive for the spec sheet', 'Slow to charge compared with rivals', 'Some AI features feel half-finished'],
    hue: ['#be185d', '#fb7185'],
    body: [
      'The Phone 9 Pro is Orbis at its most confident. Its triple-camera system uses a large main sensor and a 5x telephoto lens, and in our side-by-side tests it held its own against phones that cost more. Night mode is particularly impressive, producing detailed shots in conditions where the competition turned to mush.',
      'The 6.7-inch display is bright enough for midday sun and smooth at 120Hz. Battery life was consistently strong, with more than 12 hours of mixed use. Orbis promises seven years of security and OS updates, which is one of the longest commitments in the industry.',
      'We were less impressed by the charging speed, which tops out at 45 watts. A few new AI features, including generative fill in the gallery, produced inconsistent results in our tests. Orbis says those features are still in beta, and the company has been shipping fixes regularly.',
    ],
  },
  {
    slug: 'lumen-qd-oled-55-review',
    title: 'Lumen QD-OLED 55 Review: The Living-Room TV to Beat',
    dek: 'Inky blacks, eye-popping highlights, and a gaming mode that keeps input lag near the floor.',
    section: 'reviews',
    category: 'tvs',
    author: 'Sam Okafor',
    date: '2026-10-30',
    readMinutes: 10,
    rating: 4.5,
    editorsChoice: true,
    price: '$1,499',
    verdict:
      'Lumen delivers picture quality that rivals TVs costing twice as much. The 55-inch QD-OLED is a top choice for movies and gaming alike.',
    pros: ['Outstanding contrast and peak brightness', 'Excellent gaming features', 'Smart OS is fast and clean'],
    cons: ['Reflective glass in bright rooms', 'Only three HDMI 2.1 ports', 'Stand is wobbly'],
    hue: ['#7c3aed', '#c084fc'],
    body: [
      'Lumen’s QD-OLED panel combines the perfect black levels of OLED with the peak brightness of quantum dots. In a dark room, the 55-inch set produced deep blacks and specular highlights that made our test scenes look three-dimensional.',
      'For gamers, the TV is a standout. It supports 4K at 144Hz with variable refresh rate, and input lag measured just 8.9 milliseconds in Game mode. HDMI 2.1 gives you full bandwidth on three ports.',
      'Bright rooms are the weak spot. The glossy panel reflects windows and lamps more than matte rivals, so placement matters. The included stand is also less stable than we would like, though a wall mount is easy to fit.',
    ],
  },
  {
    slug: 'aerobuds-pro-2-review',
    title: 'AeroBuds Pro 2 Review: Refined Sound, Fit Still Hit or Miss',
    dek: 'Clean, detailed audio and solid noise cancellation, but the fit won’t suit everyone.',
    section: 'reviews',
    category: 'audio',
    author: 'Priya Nair',
    date: '2026-10-27',
    readMinutes: 6,
    rating: 3.5,
    price: '$199',
    verdict:
      'The AeroBuds Pro 2 sound better than ever and cancel noise well. A fit that depends heavily on ear shape keeps them from a higher score.',
    pros: ['Balanced, detailed sound', 'Effective adaptive noise cancellation', 'Case supports wireless charging'],
    cons: ['Fit varies widely between ears', 'Touch controls are sometimes unresponsive', 'Expensive relative to rivals'],
    hue: ['#b45309', '#fbbf24'],
    body: [
      'The AeroBuds Pro 2 carry a clear upgrade in tuning. Vocals are forward without sounding harsh, and the bass is tight rather than boomy. A companion app offers a five-band equalizer and a spatial audio mode that works well with movies.',
      'Adaptive noise cancellation handled everything from airplane drone to office chatter. Transparency mode is natural, which matters if you wear them while walking around town.',
      'Fit is the sticking point. Two of our five testers could not get a secure seal, which affected both bass and noise cancellation. If you are unsure, try them on before buying or check the return policy.',
    ],
  },
  {
    slug: 'quanta-g1-handheld-review',
    title: 'Quanta G1 Handheld Review: Serious Power in Your Hands',
    dek: 'A capable Windows handheld with a bright screen, but the battery drains quickly on demanding games.',
    section: 'reviews',
    category: 'gaming',
    author: 'Lena Fischer',
    date: '2026-10-24',
    readMinutes: 7,
    rating: 4.0,
    price: '$549',
    verdict:
      'The Quanta G1 is the most powerful handheld we have tested, but you will want to keep it plugged in for graphically demanding games.',
    pros: ['Runs modern AAA games at medium settings', 'Bright, color-rich 8-inch screen', 'Full Windows library'],
    cons: ['Battery lasts about 90 minutes in demanding games', 'Fan noise under load', 'Heavy at 1.5 pounds'],
    hue: ['#047857', '#34d399'],
    body: [
      'Handheld gaming PCs have been getting more capable every year, and the Quanta G1 pushes that trend further. Its custom chip runs many modern titles at 1080p with medium settings, and the 120Hz screen makes fast-paced shooters feel responsive.',
      'Because it runs full Windows, you can install almost any store, including launchers you already own. The trade-off is battery life. In our demanding-game test, we got around 90 minutes before needing a charge. Lighter games and streaming lasted much longer.',
      'The fan is audible under load, and the device is heavier than a standard console controller. If you mostly play on the couch, the G1 is a great way to take a big game on the road.',
    ],
  },
  {
    slug: 'hearth-thermostat-gen-3-review',
    title: 'Hearth Smart Thermostat Gen 3 Review: Smarter Schedules, Easier Setup',
    dek: 'The third-generation Hearth learns faster and installs in under an hour, though a few advanced features need a subscription.',
    section: 'reviews',
    category: 'smart-home',
    author: 'Sam Okafor',
    date: '2026-10-21',
    readMinutes: 6,
    rating: 4.0,
    price: '$179',
    verdict:
      'A polished smart thermostat that saves real energy without much effort. Some useful extras sit behind a paid plan.',
    pros: ['Learns your schedule within a week', 'Installs in under an hour with clear instructions', 'Works with most HVAC systems'],
    cons: ['Energy reports require a subscription', 'Companion app is busy', 'No built-in air quality sensor'],
    hue: ['#0e7490', '#67e8f9'],
    body: [
      'Hearth’s third-generation thermostat is refined in the ways that matter. The round display is easy to read from across the room, and the setup wizard checks your wiring before you finish the install. Our installer finished in 48 minutes on a standard two-wire system.',
      'Within about a week, the thermostat built a schedule from our manual adjustments and started adjusting automatically. Over a month of testing, it cut heating and cooling runtime by roughly 12 percent compared with a manually scheduled unit.',
      'The app is comprehensive but cluttered. Detailed energy reports and multi-zone support require a subscription, which adds ongoing cost. For most homes, the core features are enough.',
    ],
  },
  {
    slug: 'vaultguard-365-review',
    title: 'VaultGuard 365 Review: Solid Protection, Heavy on Upsells',
    dek: 'Malware detection is excellent, but the constant prompts to buy add-ons get in the way.',
    section: 'reviews',
    category: 'software',
    author: 'Dev Patel',
    date: '2026-10-18',
    readMinutes: 5,
    rating: 3.0,
    price: '$49/year',
    verdict:
      'VaultGuard catches threats effectively and has minimal performance impact, but its aggressive upselling makes it hard to recommend over free alternatives.',
    pros: ['Excellent malware detection', 'Light on system resources', 'Covers up to ten devices'],
    cons: ['Frequent pop-up upsell prompts', 'VPN is limited to 200MB per day', 'Confusing privacy settings'],
    hue: ['#334155', '#94a3b8'],
    body: [
      'In independent lab-style tests, VaultGuard 365 blocked nearly every sample we threw at it, including fileless attacks and phishing sites. It barely registered in our system performance benchmarks, which is a real achievement for a security suite.',
      'Unfortunately, the experience around the protection is cluttered. Pop-ups push a premium VPN, password manager, and identity monitoring service, and the privacy dashboard buries its most important toggles two menus deep.',
      'If you want a set-and-forget guard for a family computer, VaultGuard does the job. Power users may prefer the built-in protections on their operating system, which now cover much of the same ground for free.',
    ],
  },
  {
    slug: 'stratus-27-ultrawide-review',
    title: 'Stratus 27 Ultrawide Review: The Monitor Creators Have Been Waiting For',
    dek: 'A 34-inch curved ultrawide with factory-calibrated color, a USB-C dock, and a sharp 5K2K panel.',
    section: 'reviews',
    category: 'computers',
    author: 'Maya Chen',
    date: '2026-10-15',
    readMinutes: 8,
    rating: 4.5,
    editorsChoice: true,
    price: '$899',
    verdict:
      'The Stratus 27 is a productivity powerhouse with accurate color and a clever USB-C dock. It is a clear pick for designers and developers.',
    pros: ['Factory-calibrated, wide color gamut', 'Single-cable USB-C with 90W charging', 'Excellent text clarity'],
    cons: ['Heavy stand', 'Speakers are an afterthought', 'Pricey for casual users'],
    hue: ['#0369a1', '#7dd3fc'],
    body: [
      'Stratus has nailed the basics on its latest ultrawide. The 5K2K panel is sharp enough that text looks like print, and the factory calibration measured within two Delta E of the reference target across our test set.',
      'Connectivity is the real surprise. A single USB-C cable delivers video, data, and 90 watts of charging to a laptop, which turns the monitor into a complete desk hub. The built-in KVM switch lets you share a keyboard and mouse between two computers.',
      'The stand is sturdy but heavy, and the built-in speakers are thin. For most people who want a single large screen for work, this is an easy recommendation.',
    ],
  },

  // ---------- News ----------
  {
    slug: '2nm-laptop-chips-all-day-battery',
    title: 'New 2nm Laptop Chips Promise All-Day Battery Life',
    dek: 'The next generation of laptop processors moves to a smaller manufacturing process, with big gains in efficiency.',
    section: 'news',
    category: 'computers',
    author: 'Maya Chen',
    date: '2026-11-06',
    readMinutes: 4,
    featured: true,
    hue: ['#1d4ed8', '#38bdf8'],
    body: [
      'Chipmakers have unveiled a new family of laptop processors built on a 2-nanometer process. The company says the chips deliver up to 30 percent better efficiency than the previous generation at the same performance level, which could translate into significantly longer battery life.',
      'Several laptop makers have already committed to shipping designs with the new chips in the first half of next year. Early benchmarks suggest the top-end model leads its class in multi-core performance while staying within a 28-watt power envelope.',
      'Analysts note that the shift to smaller process nodes is getting more expensive, which could push laptop prices higher at launch. Buyers who want the best efficiency may want to wait for second-generation designs.',
    ],
  },
  {
    slug: 'phone-update-on-device-ai-photo-editing',
    title: 'Phone Update Adds On-Device AI Photo Editing',
    dek: 'A new software release lets you edit photos with plain-language requests, without sending images to the cloud.',
    section: 'news',
    category: 'ai',
    author: 'Dev Patel',
    date: '2026-11-05',
    readMinutes: 3,
    hue: ['#4338ca', '#a5b4fc'],
    body: [
      'A major phone maker has released an update that brings generative photo editing directly to the device. Users can type requests such as “remove the power line” or “brighten the faces,” and the phone processes the edit locally.',
      'The company says on-device processing keeps photos private and works without an internet connection. Edits on older hardware take longer, and some complex requests still need a cloud fallback, which the settings menu lets you disable.',
    ],
  },
  {
    slug: 'streaming-service-cheaper-ad-tier',
    title: 'Streaming Service Launches Cheaper Tier With Ads',
    dek: 'A new plan costs $6.99 a month, but includes commercial breaks and a lower default video quality.',
    section: 'news',
    category: 'tvs',
    author: 'Sam Okafor',
    date: '2026-11-03',
    readMinutes: 3,
    hue: ['#7c3aed', '#c084fc'],
    body: [
      'A popular streaming service has introduced an ad-supported plan at $6.99 per month, down from the ad-free price of $17.99. Subscribers on the new plan will see roughly four minutes of commercials per hour.',
      'The cheaper tier caps video at 1080p, while the ad-free plan supports 4K HDR. The service says the ad tier will offer the full library, though some live sports will be unavailable.',
    ],
  },
  {
    slug: 'browser-passkeys-default-sign-in',
    title: 'Major Browser Makes Passkeys the Default Sign-In Method',
    dek: 'Passwords will still work, but the browser now asks you to create a passkey first on supported sites.',
    section: 'news',
    category: 'software',
    author: 'Lena Fischer',
    date: '2026-11-01',
    readMinutes: 3,
    hue: ['#334155', '#94a3b8'],
    body: [
      'Passkeys are a phishing-resistant alternative to passwords, and a leading browser is making them the default. When you create an account on a supported site, the browser now offers a passkey before falling back to a password.',
      'Passkeys sync across your devices through your operating system’s password manager. Security researchers welcomed the change, though they note that many smaller sites still do not support them.',
    ],
  },
  {
    slug: 'handheld-price-cut-before-holidays',
    title: 'Gaming Handheld Gets Price Cut Ahead of Holidays',
    dek: 'The most popular portable console drops $50 in time for the holiday shopping season.',
    section: 'news',
    category: 'gaming',
    author: 'Lena Fischer',
    date: '2026-10-31',
    readMinutes: 2,
    hue: ['#047857', '#34d399'],
    body: [
      'A portable gaming console now costs $50 less than its launch price, making it one of the best-value handhelds on the market. The discount applies to the standard model and the bundle that includes a carrying case.',
      'The price cut comes as retailers gear up for the holiday season. Stock is expected to be limited on the bundle, so buyers who want it should act quickly.',
    ],
  },
  {
    slug: 'smart-home-standard-update',
    title: 'Smart Home Standard Gets Its Biggest Update Yet',
    dek: 'The new version improves device pairing, adds local control, and makes it easier to move devices between ecosystems.',
    section: 'news',
    category: 'smart-home',
    author: 'Sam Okafor',
    date: '2026-10-28',
    readMinutes: 4,
    hue: ['#0e7490', '#67e8f9'],
    body: [
      'The long-running smart home standard has released its largest update since launch. The revision adds local control, which keeps lights and locks working even when the internet is down, and simplifies setup with a single code scan.',
      'Manufacturers that support the update will be able to share devices across major ecosystems. Existing devices will receive the update over the air, though some older hubs may need a firmware refresh first.',
    ],
  },

  // ---------- Best Products ----------
  {
    slug: 'best-laptops-2026',
    title: 'The Best Laptops for 2026',
    dek: 'Our top picks for students, creators, travelers, and anyone who needs a dependable everyday machine.',
    section: 'best',
    category: 'computers',
    author: 'Maya Chen',
    date: '2026-11-02',
    readMinutes: 12,
    hue: ['#1d4ed8', '#38bdf8'],
    body: [
      'Best overall: the Nova Book 14 combines a superb OLED display, long battery life, and a comfortable keyboard in a light chassis. It is the laptop we would buy for ourselves.',
      'Best for creators: the Stratus 27 Ultrawide pairs with almost any laptop for a sharp, color-accurate workspace.',
      'Best budget: look for last year’s models on sale. They often offer 90 percent of the performance for half the price.',
    ],
  },
  {
    slug: 'best-wireless-earbuds-2026',
    title: 'The Best Wireless Earbuds for 2026',
    dek: 'From noise cancellation to workouts, these are the earbuds we reach for most.',
    section: 'best',
    category: 'audio',
    author: 'Priya Nair',
    date: '2026-10-26',
    readMinutes: 9,
    hue: ['#b45309', '#fbbf24'],
    body: [
      'Best overall: the AeroBuds Pro 2 offer rich sound and strong noise cancellation, if the fit works for your ears.',
      'Best for workouts: choose a pair with an IP57 rating or higher and a secure over-ear hook.',
      'Best budget: several sub-$100 options now deliver clear mids and decent isolation, which is plenty for commuting.',
    ],
  },
  {
    slug: 'best-phones-under-500',
    title: 'The Best Phones Under $500',
    dek: 'You do not need a flagship to take great photos or get years of updates.',
    section: 'best',
    category: 'phones',
    author: 'Dev Patel',
    date: '2026-10-20',
    readMinutes: 8,
    hue: ['#be185d', '#fb7185'],
    body: [
      'Best overall: look for a midrange phone with at least 128GB of storage, a 120Hz display, and a promise of three or more years of OS updates.',
      'Best camera: the top budget models now produce usable night shots, though they will not match a flagship in low light.',
      'Best battery life: prioritize phones with 5,000mAh or larger batteries if you forget to charge overnight.',
    ],
  },

  // ---------- How-To ----------
  {
    slug: 'free-up-storage-windows',
    title: 'How to Free Up Storage on Windows in 10 Minutes',
    dek: 'A quick checklist for clearing out space without deleting anything important.',
    section: 'how-to',
    category: 'software',
    author: 'Lena Fischer',
    date: '2026-11-07',
    readMinutes: 5,
    hue: ['#334155', '#94a3b8'],
    body: [
      'Start with Storage settings. Open Settings, go to System, then Storage, and review the breakdown. Turn on Storage Sense so Windows clears temporary files automatically.',
      'Next, uninstall apps you no longer use. Sort the list by size so you can see the biggest offenders first. Then empty the Recycle Bin and check the Downloads folder, which tends to collect large installers and old archives.',
      'Finally, move large media files such as photos and videos to an external drive or cloud storage. This keeps your system drive responsive and gives you room for updates.',
    ],
  },
  {
    slug: 'set-up-passkeys-on-your-phone',
    title: 'How to Set Up Passkeys on Your Phone',
    dek: 'Passkeys are safer than passwords and easier to use. Here is how to create your first one.',
    section: 'how-to',
    category: 'software',
    author: 'Lena Fischer',
    date: '2026-11-02',
    readMinutes: 4,
    hue: ['#334155', '#94a3b8'],
    body: [
      'Open the website or app you want to protect and look for a passkey option in the security settings. Choose to create a passkey, then confirm with your fingerprint or face.',
      'Your passkey syncs to your other devices through your phone’s password manager, so you can sign in on a laptop without typing a password. Keep your phone’s screen lock turned on, since it protects your passkeys.',
      'Once a passkey works, consider removing the old password for that account if the service allows it.',
    ],
  },
  {
    slug: 'better-wifi-coverage-at-home',
    title: 'How to Get Better Wi-Fi Coverage at Home',
    dek: 'Dead zones are usually a placement problem. Fix that first before buying new hardware.',
    section: 'how-to',
    category: 'smart-home',
    author: 'Sam Okafor',
    date: '2026-10-29',
    readMinutes: 6,
    hue: ['#0e7490', '#67e8f9'],
    body: [
      'Place your router in a central, elevated spot, away from thick walls, microwaves, and metal objects. Avoid hiding it inside a cabinet.',
      'Next, check which Wi-Fi band each device uses. Put the 5GHz band on devices close to the router and reserve 2.4GHz for distant gadgets that need range more than speed.',
      'If you still have dead zones, a mesh system or a wired access point will usually beat a basic range extender. Mesh systems share one network name, so devices roam smoothly.',
    ],
  },

  // ---------- AI & Apps ----------
  {
    slug: 'ai-assistant-inbox-summaries',
    title: 'AI Assistants Now Summarize Your Inbox by Default',
    dek: 'A new email app update adds automatic summaries, priority sorting, and draft replies to every account.',
    section: 'news',
    category: 'ai',
    author: 'Dev Patel',
    date: '2026-10-25',
    readMinutes: 3,
    hue: ['#4338ca', '#a5b4fc'],
    body: [
      'An email app has turned on AI summaries by default for all accounts. Each morning, the app produces a short digest of unread messages and flags the ones that appear to need action.',
      'Draft replies are available for common requests such as scheduling and confirmations. Users can turn off any AI feature in settings, and the company says messages are not used to train its models.',
    ],
  },
];

export const ALL_ARTICLES: Article[] = [...ARTICLES].sort((a, b) =>
  b.date.localeCompare(a.date),
);

// ---------- Helpers ----------

export function getSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getArticle(slug: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
}

export function articlesInSection(section: SectionSlug): Article[] {
  return ALL_ARTICLES.filter((a) => a.section === section);
}

export function articlesInCategory(category: CategorySlug): Article[] {
  return ALL_ARTICLES.filter((a) => a.category === category);
}

export function editorsChoice(): Article[] {
  return ALL_ARTICLES.filter((a) => a.editorsChoice);
}

export function featuredArticle(): Article {
  return ALL_ARTICLES.find((a) => a.featured) ?? ALL_ARTICLES[0];
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return ALL_ARTICLES.filter((a) => {
    const haystack = [
      a.title,
      a.dek,
      a.author,
      getCategory(a.category)?.name ?? '',
      getSection(a.section)?.name ?? '',
    ]
      .join(' ')
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}

export function categoryName(slug: CategorySlug): string {
  return getCategory(slug)?.name ?? slug;
}

export function sectionName(slug: SectionSlug): string {
  return getSection(slug)?.name ?? slug;
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function articlePath(article: Pick<Article, 'slug'>): string {
  return `/article/${article.slug}`;
}
