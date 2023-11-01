import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomDateService {

  static articles = [
    // Sep
    {
      "description": "The prevailing notion is that individuals are averse to being subjected to sales pitches.",
      "title": "How you should approach a stranger about your product or service",
      "location": "/blog/how-you-should-approach-a-stranger-about-your-product-or-service",
      "image": "/assets/images/blog/how-you-should-approach-a-stranger-about-your-product-or-service.webp"
    },
    {
      "description": "To ensure optimal online visibility, it is imperative to employ the following strategies",
      "title": "Here's how you can achieve e-commerce excellence",
      "location": "/blog/heres-how-you-can-achieve-e-commerce-excellence",
      "image": "/assets/images/blog/heres-how-you-can-achieve-e-commerce-excellence.webp"
    },
    {
      "description": "With over three decades of experience as an IT Consultant, I have come to understand that most individuals yearn for career advancement.",
      "title": "How to get your client a promotion",
      "location": "/blog/how-to-get-your-client-a-promotiong",
      "image": "/assets/images/blog/how-to-get-your-client-a-promotion.webp"
    },
    {
      "description": "Social media marketing (SMM) is crucial to numerous businesses' marketing strategies.",
      "title": "Social Media Marketing (SMM) requires patience, especially organic",
      "location": "/blog/social-media-marketing-requires-patience",
      "image": "/assets/images/blog/social-media-marketing-requires-patience.webp"
    },
    // Oct
    {
      "description": "If you are an e-commerce entrepreneur, the concept of expanding your business has undoubtedly crossed your mind.",
      "title": "e-Commerce Scalability Strategy",
      "location": "/blog/oct-2022/e-commerce-scalability-strategy",
      "image": "/assets/images/blog/e-commerce-scalability-strategy.webp"
    },
    {
      "description": "The topic of digital transformation is currently a subject of widespread discussion. However, it is essential to grasp its true meaning.",
      "title": "How we can help with your Digital Transformation",
      "location": "/blog/oct-2022/how-we-can-help-with-your-digital-transformation",
      "image": "/assets/images/blog/how-we-can-help-with-your-digital-transformation.webp"
    },
    
    // Dec
    {
      "description": "The email address serves as the predominant means of account authentication across various platforms.",
      "title": "Tips for Secure Passwordless SignIn with Email Address only",
      "location": "/blog/dec-2022/tips-for-secure-passwordless-signin-with-email-address-only",
      "image": "/assets/images/blog/tips-for-secure-passwordless-signin-with-email-address-only.webp"
    },
    {
      "description": "Customers harbor a strong desire to be heard and comprehended, yearning for a sense of alignment with your company.",
      "title": "Keeping Customers Happy by being Responsive",
      "location": "/blog/dec-2022/keeping-customers-happy-by-being-responsive",
      "image": "/assets/images/blog/keeping-customers-happy-by-being-responsive.webp"
    },
    {
      "description": "The Orrefilat project presents a remarkable opportunity to construct a sophisticated platform dedicated to facilitating the online sale of pet products.",
      "title": "An e-commerce platform for selling",
      "location": "/blog/dec-2022/an-e-commerce-platform-for-selling",
      "image": "/assets/images/blog/an-e-commerce-platform-for-selling.webp"
    },
    // Jam
    {
      "description": "I've been looking at startup investments for years, and I've seen many failures. I'm sure it's not fun to lose money, but it's even worse when your friend or neighbor loses money on a project they were excited about.",
      "title": "I only want to lose money with people I know",
      "location": "/blog/jan-2023/i-only-want-to-lose-money-with-people-i-know",
      "image": "/assets/images/blog/i-only-want-to-lose-money-with-people-i-know.webp"
    },
    {
      "description": "If you're a Black person in the technology industry, you probably often feel like an outsider in software delivery.",
      "title": "A Different Perspective on Software Delivery",
      "location": "/blog/jan-2023/a-different-perspective-on-software-delivery",
      "image": "/assets/images/blog/a-different-perspective-on-software-delivery.webp"
    },

    // May
    {
      "description": "The significance of web design in establishing a captivating online presence cannot be understated.",
      "title": "The Crucial Elements of Proper Web Design",
      "location": "/blog/may-2023/the-crucial-elements-of-proper-web-design",
      "image": "/assets/images/blog/the-crucial-elements-of-proper-web-design.webp"
    },
    {
      "description": "The labyrinthine realm of IT consulting companies in Seattle presents a captivating saga for neophytes attempting to navigate this tech-infested Emerald City.",
      "title": "A Beginner's Guide to Spotting IT Consulting Companies in Seattle",
      "location": "/blog/may-2023/a-beginners-guide-to-spotting-it-consulting-companies-in-seattle",
      "image": "/assets/images/blog/a-beginners-guide-to-spotting-it-consulting-companies-in-seattle.webp"
    },
    {
      "description": "Picture this: a world where women reign supreme in technology, bringing their unique perspectives and brilliant minds to reshape the coding landscape.",
      "title": "Unleashing Female Brilliance in the Male-Dominated Tech World",
      "location": "/blog/may-2023/unleashing-female-brilliance-in-the-male-dominated-tech-world",
      "image": "/assets/images/blog/unleashing-female-brilliance-in-the-male-dominated-tech-world.webp"
    },
    {
      "description": "Ah, open source projects, the tantalizing realm of free software and community collaboration.",
      "title": "A Comedy of Errors and Antiquated Endeavors",
      "location": "/blog/may-2023/a-comedy-of-errors-and-antiquated-endeavors",
      "image": "/assets/images/blog/a-comedy-of-errors-and-antiquated-endeavors.webp"
    },
    {
      "description": "Where technological advancements abound, harnessing the power of data has become paramount.",
      "title": "Succumbing to Competitors Leveraging AI/ML for a Competitive Edge",
      "location": "/blog/may-2023/succumbing-to-competitors-leveraging-ai-ml-for-a-competitive-edge",
      "image": "/assets/images/blog/succumbing-to-competitors-leveraging-ai-ml-for-a-competitive-edge.webp"
    },
    {
      "description": "As businesses increasingly recognize the benefits of cloud computing, successful cloud migration has become a vital strategic decision.",
      "title": "4 Key Factors For Successful Cloud Migration: Expert Tips From Taliferro Group IT Consulting",
      "location": "/blog/may-2023/four-key-factors-for-successful-cloud-migration-expert-tips-from-taliferro-group-it-consulting",
      "image": "/assets/images/blog/four-key-factors-for-successful-cloud-migration-expert-tips-from-taliferro-group-it-consulting.webp"
    },
    {
      "description": "In the vibrant tech hub of Seattle, IT consulting companies play a crucial role in driving innovation and providing essential technology services.",
      "title": "Navigating The IT Consulting Companies In Seattle: Essential Tips For Success",
      "location": "/blog/may-2023/navigating-the-it-consulting-companies-in-seattle-essential-tips-for-success",
      "image": "/assets/images/blog/navigating-the-it-consulting-companies-in-seattle-essential-tips-for-success.webp"
    },
    {
      "description": "In the tumultuous ocean of startups, many secrets bob beneath the surface, concealed by frothy waves of entrepreneurship, innovation, and the tireless quest for the golden goose - success.",
      "title": "Joe, We Need To Talk - A Rejoinder To Procopio's Startup Stratagems",
      "location": "/blog/may-2023/joe-we-need-to-talk-a-rejoinder-to-procopios-startup-stratagems",
      "image": "/assets/images/blog/joe-we-need-to-talk-a-rejoinder-to-procopios-startup-stratagems.webp"
    },
    {
      "description": "In the kaleidoscopic realm of technology, two stars twinkle brighter than all others - Steve Jobs, the charismatic maestro of Apple, and Elon Musk, the enigmatic puppeteer of Tesla and SpaceX.",
      "title": "Steve, Elon, & Me",
      "location": "/blog/may-2023/steve-elon-and-me",
      "image": "/assets/images/blog/steve-elon-and-me.webp"
    },
    {
      "description": "In the grand tapestry of technological advancement, cloud architecture is a paragon of innovation, a dazzling symphony of intricate engineering and aesthetic prowess.",
      "title": "Cloud Architecture: The Marriage Of Art And Science",
      "location": "/blog/may-2023/cloud-architecture-the-marriage-of-art-and-science",
      "image": "/assets/images/blog/cloud-architecture-the-marriage-of-art-and-science.webp"
    },
    {
      "description": "Ladies and Gentlemen, step right up, for I am about to elucidate a conundrum that has been befuddling me to my very core.",
      "title": "Slow Fashion? More Like Slow Websites!",
      "location": "/blog/may-2023/slow-fashion-more-like-slow-websites",
      "image": "/assets/images/blog/slow-fashion-more-like-slow-websites.webp"
    },
    {
      "description": "Once upon a time, long before the dawn of the ChatGPT era, nestled in the formative years of 2012-2014, I found myself on the cusp of a technological breakthrough.",
      "title": "The Odyssey Of - Find",
      "location": "/blog/may-2023/the-odyssey-of-find",
      "image": "/assets/images/blog/the-odyssey-of-find.webp"
    },
    {
      "description": "Suppose we were to believe everything we read. A vision of ultimate orderliness and exactitude, right?",
      "title": "Lab Rats Or Mad Hatters",
      "location": "/blog/may-2023/lab-rats-or-mad-hatters",
      "image": "/assets/images/blog/lab-rats-or-mad-hatters.webp"
    },
    {
      "description": "In the grand pageant of product management, we often overlook the secret weapon of corporate ascendancy - a delicate dance of perceptive consumer impersonation and stringent due diligence that can usher in an unanticipated torrent of cash.",
      "title": "When Dollars Waltz In - The Unassuming Key To Unleashing Your Financial Torrent",
      "location": "/blog/may-2023/when-dollars-waltz-in-the-unassuming-key-to-unleashing-your-financial-torrent",
      "image": "/assets/images/blog/when-dollars-waltz-in-the-unassuming-key-to-unleashing-your-financial-torrent.webp"
    },
    {
      "description": "The specter of cybersecurity breaches continues to haunt T-Mobile as it grapples with its second data breach within the year.",
      "title": "T-Mobile's Data Breach Déjà Vu: An Argument For A Shift In Contractor Relationships And Cybersecurity Priorities",
      "location": "/blog/may-2023/an-argument-for-a-shift-in-contractor-relationships-and-cybersecurity-priorities",
      "image": "/assets/images/blog/an-argument-for-a-shift-in-contractor-relationships-and-cybersecurity-priorities.webp"
    },
    {
      "description": "Data is the new oil in the contemporary ecosystem, a rich resource that fuels digital transformation and operational efficiency.",
      "title": "How Can Data Analytics Contribute To Operational Efficiency?",
      "location": "/blog/may-2023/how-can-data-analytics-contribute-to-operational-efficiency",
      "image": "/assets/images/blog/how-can-data-analytics-contribute-to-operational-efficiency.webp"
    },
    {
      "description": "On a seemingly innocuous day earmarked for familial integration in the workplace, T-Mobile's annual \"Take Your Child to Work Day\" metamorphosed into a veritable disaster, leaving an indelible mark on its corporate calendar.",
      "title": "A Gastrointestinal Metaphor for Corporate Data Security",
      "location": "/blog/may-2023/a-gastrointestinal-metaphor-for-corporate-data-security",
      "image": "/assets/images/blog/a-gastrointestinal-metaphor-for-corporate-data-security.webp"
    },
    {
      "description": "In an epoch characterized by an exponential surge in digital communication, Google has taken an innovative stride forward in bolstering cybersecurity. The tech behemoth introduces new machine learning models into its Apigee platform, specifically designed to detect potential business logic attacks.",
      "title": "A Paradigm Shift in API Security Through Machine Learning",
      "location": "/blog/may-2023/a-paradigm-shift-in-api-security-through-machine-learning",
      "image": "/assets/images/blog/a-paradigm-shift-in-api-security-through-machine-learning.webp"
    },
    {
      "description": "As digital technologies permeate the educational sphere, Learning Management Systems (LMS) are becoming instrumental in shaping the pedagogical landscape.",
      "title": "Best Practices and Design Patterns for Google Calendar Integration into Learning Management Systems",
      "location": "/blog/may-2023/best-practices-and-design-patterns-for-google-calendar-integration-into-learning-management-systems",
      "image": "/assets/images/blog/best-practices-and-design-patterns-for-google-calendar-integration-into-learning-management-systems.webp"
    },
    {
      "description": "This relentless quest for efficiency, characterized by optimizing resources and maximizing output, has led to a burgeoning interest in technological solutions.",
      "title": "Achieving Operational Efficiency Through Technological Solutions - Part I",
      "location": "/blog/may-2023/achieving-operational-efficiency-through-technological-solutions-part-i",
      "image": "/assets/images/blog/achieving-operational-efficiency-through-technological-solutions-part-i.webp"
    },
    {
      "description": "Organizations continually seek ways to boost operational efficiency in today's rapidly evolving business landscape.",
      "title": "Operational Efficiency Through Technology - Part II",
      "location": "/blog/may-2023/operational-efficiency-through-technology-part-ii",
      "image": "/assets/images/blog/operational-efficiency-through-technology-part-ii.webp"
    },
    {
      "description": "Seattle's thriving business landscape is fueled by the constant evolution of technology and the digital age.",
      "title": "Unleashing the Power of IT Consulting in Seattle",
      "location": "/blog/may-2023/unleashing-the-power-of-it-consulting-in-seattle",
      "image": "/assets/images/blog/unleashing-the-power-of-it-consulting-in-seattle.webp"
    },
    // Apr
    {
      "description": "The recent article by Venture Beat, titled Report shows 92% of organizations experienced an API security incident last year sheds light on the precarious state of API security across numerous organizations.",
      "title": "The Perils of Neglecting API Governance and Expertise",
      "location": "/blog/apr-2023/the-perils-of-neglecting-api-governance-and-expertise",
      "image": "/assets/images/blog/the-perils-of-neglecting-api-governance-and-expertise.webp"
    },
    {
      "description": "While the recent article - Top cloud providers Amazon, Microsoft, and Google face ongoing spending cuts by clients - by Jordan Novet highlights the slowdown in growth for major cloud service providers, there is an alternative perspective to consider.",
      "title": "The Importance of Due Diligence in Cloud Adoption",
      "location": "/blog/apr-2023/the-importance-of-due-diligence-in-cloud-adoption",
      "image": "/assets/images/blog/the-importance-of-due-diligence-in-cloud-adoption.webp"
    },
    {
      "description": "In the hallowed halls of Accenture, the illustrious corporation renowned for its prowess in professional services, there transpired a comical incident that elucidated the complexities of yearning for a secretary in the modern corporate milieu.",
      "title": "The Comedic Conundrum of Coveting a Secretary at Accenture",
      "location": "/blog/apr-2023/the-comedic-conundrum-of-coveting-a-secretary-at-accenture",
      "image": "/assets/images/blog/the-comedic-conundrum-of-coveting-a-secretary-at-accenture.webp"
    },
    {
      "description": "The article - Microsoft Defender for APIs Now Available in Preview - delves into the latest advancements in API security, elucidating how Microsoft's new offering leverages artificial intelligence (AI) to detect security flaws and safeguard APIs in enterprise environments.",
      "title": "A Rejoinder to Microsoft Defender for APIs",
      "location": "/blog/apr-2023/a-rejoinder-to-microsoft-defender-for-apis",
      "image": "/assets/images/blog/a-rejoinder-to-microsoft-defender-for-apis.webp"
    },
    {
      "description": "In the twilight of my life, I often reflect upon the past, contemplating the numerous paths not taken and the myriad opportunities forsaken. One pervasive thought that haunts me as a specter of the past is the unfulfilled ambition of working for two of the most illustrious technology giants in the world - Microsoft and Apple.",
      "title": "Unfulfilled Aspirations of a Tech Enthusiast",
      "location": "/blog/apr-2023/unfulfilled-aspirations-of-a-tech-enthusiast",
      "image": "/assets/images/blog/unfulfilled-aspirations-of-a-tech-enthusiast.webp"
    },
    {
      "description": "Getting a job can be a difficult task, and it can be incredibly challenging for minorities, particularly Black people.",
      "title": "Who You Know",
      "location": "/blog/apr-2023/who-you-know",
      "image": "/assets/images/blog/who-you-know.webp"
    },
    {
      "description": "In the digital age, website development, and optimization are crucial to business success.",
      "title": "Avoiding the Pitfalls of Website Development and Optimization",
      "location": "/blog/apr-2023/avoiding-the-pitfalls-of-website-development-and-optimization",
      "image": "/assets/images/blog/avoiding-the-pitfalls-of-website-development-and-optimization.webp"
    },
    {
      "description": "Implementing an Enterprise Resource Planning (ERP) system can be a transformative endeavor for any organization, streamlining business processes, enhancing efficiency, and promoting data-driven decision-making.",
      "title": "Implementing an ERP System and Evading Implementation Pitfalls",
      "location": "/blog/apr-2023/implementing-an-erp-system-and-evading-implementation-pitfalls",
      "image": "/assets/images/blog/implementing-an-erp-system-and-evading-implementation-pitfalls.webp"
    },
    {
      "description": "In 2007, I was a bright-eyed Accenture project manager overseeing Microsoft's Commerce Server development.",
      "title": "My Comedic Journey as a Project Manager for Microsoft\'s Commerce Server",
      "location": "/blog/apr-2023/my-comedic-journey-as-a-project-manager-for-microsofts-commerce-server",
      "image": "/assets/images/blog/my-comedic-journey-as-a-project-manager-for-microsofts-commerce-server.webp"
    },
    {
      "description": "Once upon a time, in the hallowed halls of academia, where the future API architects and luminaries of our digital world were nurtured, a series of utterly calamitous and, dare I say, amusing design practices were born.",
      "title": "The Hilarious Tragedy of Doomed API Design Practices",
      "location": "/blog/apr-2023/the-hilarious-tragedy-of-doomed-api-design-practices",
      "image": "/assets/images/blog/the-hilarious-tragedy-of-doomed-api-design-practices.webp"
    },
    {
      "description": "It was a typical evening when I decided to take a break from my daily tasks and delve into the world of YouTube.",
      "title": "The Dark Side of Fortune\'s 30 Under 30: When Success Turns to Crime",
      "location": "/blog/apr-2023/the-dark-side-of-fortunes-30-under-30-when-success-turns-to-crime",
      "image": "/assets/images/blog/the-dark-side-of-fortunes-30-under-30-when-success-turns-to-crime.webp"
    },
    {
      "description": "In an increasingly digital world, technology constantly evolves and becomes more complex. With countless devices, applications, and software programs, it can be challenging to determine which ones best suit our needs. Enter artificial intelligence (AI) - an advanced technology that has the potential to serve as a personalized technology advisor.",
      "title": "Can AI Be Your Technology Advisor? Harnessing the Power of Artificial Intelligence for Personalized Tech Guidance",
      "location": "/blog/apr-2023/can-ai-be-your-technology-advisor-harnessing-the-power-of-artificial-intelligence-for-personalized-tech-guidance",
      "image": "/assets/images/blog/can-ai-be-your-technology-advisor-harnessing-the-power-of-artificial-intelligence-for-personalized-tech-guidance.webp"
    },
    {
      "description": "In the contemporary digital communication landscape, the term \"REST API\" has become virtually ubiquitous, permeating the lexicon of developers and technologists alike. However, this seemingly innocuous phrase harbors a fundamental incongruity that belies the original intent of its progenitor, Roy Fielding.",
      "title": "The Misapplication of REST API - Dissecting the Discrepancy between API and REST",
      "location": "/blog/apr-2023/the-misapplication-of-rest-api-dissecting-the-discrepancy-between-api-and-rest",
      "image": "/assets/images/blog/the-misapplication-of-rest-api-dissecting-the-discrepancy-between-api-and-rest.webp"
    },
    {
      "description": "Businesses must continually adapt and refine their approach to customer acquisition and retention. A pivotal aspect of this endeavor is identifying and targeting the ideal customer.",
      "title": "The Quintessential Paradigm for Identifying Your Ideal Customer: A Comprehensive Analysis",
      "location": "/blog/apr-2023/the-quintessential-paradigm-for-identifying-your-ideal-customer-a-comprehensive-analysis",
      "image": "/assets/images/blog/the-quintessential-paradigm-for-identifying-your-ideal-customer-a-comprehensive-analysis.webp"
    },
    {
      "description": "In the autumnal season of one's life, when the hard-earned wisdom of experience has long supplanted the spirited optimism of youth, the prospect of embarking upon a new professional endeavor can prove an arduous and, at times, comical undertaking.",
      "title": "Looking for work in your 60s",
      "location": "/blog/apr-2023/looking-for-work-in-your-sixties",
      "image": "/assets/images/blog/looking-for-work-in-your-sixties.webp"
    },
    {
      "description": "The proliferation of technology and the ever-increasing interconnectedness of our world have given rise to new challenges and vulnerabilities.",
      "title": "Cybersecurity Breaches: The Real Cost of Hacking and Data Theft",
      "location": "/blog/apr-2023/cybersecurity-breaches-the-real-cost-of-hacking-and-data-theft",
      "image": "/assets/images/blog/cybersecurity-breaches-the-real-cost-of-hacking-and-data-theft.webp"
    },
    {
      "description": "Content marketing has emerged as a preeminent strategy for businesses seeking to establish a robust online presence, engender brand awareness, and foster meaningful connections with their target audience.",
      "title": "The Benefits of Content Marketing",
      "location": "/blog/apr-2023/the-benefits-of-content-marketing",
      "image": "/assets/images/blog/the-benefits-of-content-marketing.webp"
    },
    {
      "description": "Platforms such as Facebook, Instagram, Twitter, and LinkedIn have revolutionized how individuals forge connections, disseminate information, and curate their public personas.",
      "title": "The Dark Side of Social Media: Mental Health, Privacy, and Cyberbullying",
      "location": "/blog/apr-2023/the-dark-side-of-social-media-mental-health-privacy-and-cyberbullying",
      "image": "/assets/images/blog/the-dark-side-of-social-media-mental-health-privacy-and-cyberbullying.webp"
    },
    {
      "description": "Artificial intelligence (AI) has emerged as a vanguard of technological advancement, permeating various sectors and engendering remarkable transformations in our quotidian lives. AI systems have bolstered human endeavors with unparalleled efficiency, from expediting medical diagnoses to facilitating instantaneous communication across vast distances.",
      "title": "AI Gone Wrong: The Unintended Consequences of Artificial Intelligence",
      "location": "/blog/apr-2023/ai-gone-wrong-the-unintended-consequences-of-artificial-intelligence",
      "image": "/assets/images/blog/ai-gone-wrong-the-unintended-consequences-of-artificial-intelligence.webp"
    },
    {
      "description": "Innovation and technology have become the driving force behind our rapidly evolving society.",
      "title": "Ethical Dilemmas in IT: The Challenges of Balancing Innovation and Responsibility",
      "location": "/blog/apr-2023/ethical-dilemmas-in-it-the-challenges-of-balancing-innovation-and-responsibility",
      "image": "/assets/images/blog/ethical-dilemmas-in-it-the-challenges-of-balancing-innovation-and-responsibility.webp"
    },
    {
      "description": "In web development and application security, authentication and authorization are critical components for ensuring the privacy and integrity of user data.",
      "title": "OAuth vs. JWT: A Comparative Analysis of Pros and Cons",
      "location": "/blog/apr-2023/oauth-vs-jwt-a-comparative-analysis-of-pros-and-cons",
      "image": "/assets/images/blog/oauth-vs-jwt-a-comparative-analysis-of-pros-and-cons.webp"
    },
    {
      "description": "The Taliferro Group assists companies in creating well-oiled software development machines that deliver high-quality software products and services.",
      "title": "How Taliferro Group Can Help You Create a Well-Oiled Software Development Machine",
      "location": "/blog/apr-2023/how-taliferro-group-can-help-you-create-a-well-oiled-software-development-machine",
      "image": "/assets/images/blog/how-taliferro-group-can-help-you-create-a-well-oiled-software-development-machine.webp"
    },
    {
      "description": "A powerful and impactful presentation can capture your audience's attention, convey your message, and leave a lasting impression. Whether you're pitching a business idea, presenting a research project, or educating a group of people, knowing how to create an engaging and persuasive presentation is crucial.",
      "title": "Creating a Powerful and Impactful Presentation: A Comprehensive Guide",
      "location": "/blog/apr-2023/creating-a-powerful-and-impactful-presentation-a-comprehensive-guide",
      "image": "/assets/images/blog/creating-a-powerful-and-impactful-presentation-a-comprehensive-guide.webp"
    },
    {
      "description": "Imagine you have a fantastic product or service you know will bring value to countless people.",
      "title": "Approaching Strangers About Your Product or Service: A Step-by-Step Guide",
      "location": "/blog/apr-2023/approaching-strangers-about-your-product-or-service-a-step-by-step-guide",
      "image": "/assets/images/blog/approaching-strangers-about-your-product-or-service-a-step-by-step-guide.webp"
    },
    {
      "description": "Digital transformation has become vital for businesses to remain competitive in today's rapidly evolving market.",
      "title": "The 5 Key Pillars of Successful Digital Transformation",
      "location": "/blog/mar-2023/the-five-key-pillars-of-successful-digital-transformation",
      "image": "/assets/images/blog/the-five-key-pillars-of-successful-digital-transformation.webp"
    },

  ]

  static months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ]

  constructor() { }

  static getRandomDate() {

    let endDate = new Date();
    let startDate = new Date("10/01/2022");

    let timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.random() * timeDiff;

    const randomDate = new Date(startDate.getTime() + randomTime);

    let returnDate = this.months[randomDate.getMonth()] + "-" + randomDate.getFullYear().toString()

    return returnDate;

  }

  static getRandomArticle() {
    let i = Math.floor(Math.random() * this.articles.length)
    return this.articles[i];
  }
}
