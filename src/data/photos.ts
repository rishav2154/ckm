export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'events' | 'workshops' | 'competitions' | 'team';
  date: string;
  tags: string[];
  driveUrl?: string; // Keep original Google Drive URL for reference
}

// Helper function to convert Google Drive share links to direct image URLs
const convertGoogleDriveUrl = (shareUrl: string): string => {
  const fileIdMatch = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1];
    // Use the most reliable Google Drive direct link format
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return shareUrl;
};

export const photos: Photo[] = [
  // 1. Try to login
  {
    id: 'login-1',
    title: 'Try to Login',
    description: 'Authentication security workshop demonstrating login vulnerabilities and protection methods',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1VTOos-FhG9MjFiAMSVYpn9KozASE1HgE/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1VTOos-FhG9MjFiAMSVYpn9KozASE1HgE/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-15',
    tags: ['authentication', 'security', 'login', 'workshop']
  },
  {
    id: 'login-2',
    title: 'Try to Login',
    description: 'Hands-on session exploring different authentication mechanisms and security protocols',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1VTTTOloK60A_L1tlabepEqxGpd-1Idzz/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1VTTTOloK60A_L1tlabepEqxGpd-1Idzz/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-15',
    tags: ['authentication', 'security', 'login', 'workshop']
  },
  {
    id: 'login-3',
    title: 'Try to Login',
    description: 'Interactive demonstration of password security and multi-factor authentication',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1VY8RGW6Uz6Rrn7qVV4U-1zUNfSdtq7SS/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1VY8RGW6Uz6Rrn7qVV4U-1zUNfSdtq7SS/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-15',
    tags: ['authentication', 'security', 'login', 'workshop']
  },
  {
    id: 'login-4',
    title: 'Try to Login',
    description: 'Practical exercises in secure login implementation and vulnerability testing',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Vbzyq3hzHJHyUjyN3QbsjrY4BkjbEQoM/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Vbzyq3hzHJHyUjyN3QbsjrY4BkjbEQoM/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-15',
    tags: ['authentication', 'security', 'login', 'workshop']
  },

  // 2. Session on cryptography
  {
    id: 'crypto-1',
    title: 'Session on Cryptography',
    description: 'Introduction to cryptographic principles and modern encryption techniques',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Vs5VZViMwRj5VEDYKsA5GRPz2Y9jQdMv/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Vs5VZViMwRj5VEDYKsA5GRPz2Y9jQdMv/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-20',
    tags: ['cryptography', 'encryption', 'security', 'session']
  },
  {
    id: 'crypto-2',
    title: 'Session on Cryptography',
    description: 'Hands-on exploration of symmetric and asymmetric encryption algorithms',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1VwfwMaC-C9q272oIzhZUYFNcVKlSM7eU/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1VwfwMaC-C9q272oIzhZUYFNcVKlSM7eU/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-20',
    tags: ['cryptography', 'encryption', 'security', 'session']
  },
  {
    id: 'crypto-3',
    title: 'Session on Cryptography',
    description: 'Digital signatures, hash functions, and cryptographic protocols workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1W15j06kFM-d3s8z2DKNl7diWzRJu3S6q/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1W15j06kFM-d3s8z2DKNl7diWzRJu3S6q/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-20',
    tags: ['cryptography', 'encryption', 'security', 'session']
  },
  {
    id: 'crypto-4',
    title: 'Session on Cryptography',
    description: 'Advanced cryptographic concepts and real-world applications',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1W1JDD_FuoieTkPK7GRTgJxD0W1ZIDDtU/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1W1JDD_FuoieTkPK7GRTgJxD0W1ZIDDtU/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-20',
    tags: ['cryptography', 'encryption', 'security', 'session']
  },
  {
    id: 'crypto-5',
    title: 'Session on Cryptography',
    description: 'Practical implementation of cryptographic solutions and best practices',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1VpkmMinY1w6ZkS0DULzALdz8n1QVV29h/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1VpkmMinY1w6ZkS0DULzALdz8n1QVV29h/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-20',
    tags: ['cryptography', 'encryption', 'security', 'session']
  },

  // 3. Session on how to be safe on internet
  {
    id: 'internet-safety-1',
    title: 'Session on How to be Safe on Internet',
    description: 'Essential internet safety practices and digital hygiene for everyday users',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WBu9av2gz7PD2ODlQN9J1ca9DA9ejJuk/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WBu9av2gz7PD2ODlQN9J1ca9DA9ejJuk/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-25',
    tags: ['internet-safety', 'awareness', 'security', 'education']
  },
  {
    id: 'internet-safety-2',
    title: 'Session on How to be Safe on Internet',
    description: 'Protecting personal information and avoiding online threats and scams',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WFTMg2FFCF3zInDuzLkPMr7eFfZJHJzc/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WFTMg2FFCF3zInDuzLkPMr7eFfZJHJzc/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-25',
    tags: ['internet-safety', 'awareness', 'security', 'education']
  },
  {
    id: 'internet-safety-3',
    title: 'Session on How to be Safe on Internet',
    description: 'Safe browsing habits, secure communication, and privacy protection online',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WAqHoGfzxVcl0gSh5Ua3JfRcMaDzFnl3/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WAqHoGfzxVcl0gSh5Ua3JfRcMaDzFnl3/view?usp=drive_link',
    category: 'workshops',
    date: '2024-01-25',
    tags: ['internet-safety', 'awareness', 'security', 'education']
  },

  // 4. Workshop on cyber security
  {
    id: 'cyber-workshop-1',
    title: 'Workshop on Cyber Security',
    description: 'Comprehensive cybersecurity fundamentals and threat landscape overview',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WT9w7TOt11R0ZMGtfudAARg3E_JnYusA/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WT9w7TOt11R0ZMGtfudAARg3E_JnYusA/view?usp=drive_link',
    category: 'workshops',
    date: '2024-02-01',
    tags: ['cybersecurity', 'workshop', 'training', 'hands-on']
  },
  {
    id: 'cyber-workshop-2',
    title: 'Workshop on Cyber Security',
    description: 'Network security principles and defensive strategies implementation',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WUK-I2mAAMLoVO_Iwcc0l8Za_poNUSJ6/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WUK-I2mAAMLoVO_Iwcc0l8Za_poNUSJ6/view?usp=drive_link',
    category: 'workshops',
    date: '2024-02-01',
    tags: ['cybersecurity', 'workshop', 'training', 'hands-on']
  },
  {
    id: 'cyber-workshop-3',
    title: 'Workshop on Cyber Security',
    description: 'Incident response procedures and security monitoring techniques',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WWLS-OMqMjv1U0urL76hRTIklYY1Gx9Q/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WWLS-OMqMjv1U0urL76hRTIklYY1Gx9Q/view?usp=drive_link',
    category: 'workshops',
    date: '2024-02-01',
    tags: ['cybersecurity', 'workshop', 'training', 'hands-on']
  },
  {
    id: 'cyber-workshop-4',
    title: 'Workshop on Cyber Security',
    description: 'Practical cybersecurity tools and vulnerability assessment methods',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WY0SygevzGf_fhujmtgpXY5PS9oFWxvf/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WY0SygevzGf_fhujmtgpXY5PS9oFWxvf/view?usp=drive_link',
    category: 'workshops',
    date: '2024-02-01',
    tags: ['cybersecurity', 'workshop', 'training', 'hands-on']
  },
  {
    id: 'cyber-workshop-5',
    title: 'Workshop on Cyber Security',
    description: 'Advanced threat detection and security architecture design',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WcMwFsfKEtxlIEIVOk08yEslpSjf94lL/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1WcMwFsfKEtxlIEIVOk08yEslpSjf94lL/view?usp=drive_link',
    category: 'workshops',
    date: '2024-02-01',
    tags: ['cybersecurity', 'workshop', 'training', 'hands-on']
  },

  // 5. Flag pursuit
  {
    id: 'flag-pursuit-1',
    title: 'Flag Pursuit',
    description: 'Capture The Flag competition testing cybersecurity skills and problem-solving abilities',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1VJd-wHAK14ryQ03moER9EKY96qG1DdBo/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1VJd-wHAK14ryQ03moER9EKY96qG1DdBo/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-05',
    tags: ['ctf', 'flag', 'competition', 'challenge']
  },

  // 6. NGO visit
  {
    id: 'ngo-visit-1',
    title: 'NGO Visit',
    description: 'Community outreach program at local NGO teaching cybersecurity awareness',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1X5x3Im9TuWU0Fn4p4TL0zxV32Von5Ojq/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1X5x3Im9TuWU0Fn4p4TL0zxV32Von5Ojq/view?usp=drive_link',
    category: 'events',
    date: '2024-02-10',
    tags: ['ngo', 'outreach', 'community', 'awareness']
  },
  {
    id: 'ngo-visit-2',
    title: 'NGO Visit',
    description: 'Educational session on digital safety for underprivileged children',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1XFRtbStFn63xuPER8eS9ydsHGFhXpwLt/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1XFRtbStFn63xuPER8eS9ydsHGFhXpwLt/view?usp=drive_link',
    category: 'events',
    date: '2024-02-10',
    tags: ['ngo', 'outreach', 'community', 'awareness']
  },
  {
    id: 'ngo-visit-3',
    title: 'NGO Visit',
    description: 'Interactive workshop on internet safety and responsible technology use',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1XS7Immv12YiMqGD1PLqBKYHa9YuVigXm/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1XS7Immv12YiMqGD1PLqBKYHa9YuVigXm/view?usp=drive_link',
    category: 'events',
    date: '2024-02-10',
    tags: ['ngo', 'outreach', 'community', 'awareness']
  },
  {
    id: 'ngo-visit-4',
    title: 'NGO Visit',
    description: 'Collaborative activities promoting digital literacy and cybersecurity awareness',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1X9RBBzp1WhivIepacmsgutE1O4Bo2NYs/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1X9RBBzp1WhivIepacmsgutE1O4Bo2NYs/view?usp=drive_link',
    category: 'events',
    date: '2024-02-10',
    tags: ['ngo', 'outreach', 'community', 'awareness']
  },

  // 7. Phishtank
  {
    id: 'phishtank-1',
    title: 'Phishtank',
    description: 'Anti-phishing competition identifying and analyzing malicious websites and emails',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1XVV1OgX5VkctoOhxluWh_mOI16de2L4o/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1XVV1OgX5VkctoOhxluWh_mOI16de2L4o/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-15',
    tags: ['phishing', 'security', 'competition', 'awareness']
  },
  {
    id: 'phishtank-2',
    title: 'Phishtank',
    description: 'Hands-on training in recognizing and reporting phishing attempts',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1XaNa-KaJlDuNWTJVKOGKB2r5ewI8uoaN/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1XaNa-KaJlDuNWTJVKOGKB2r5ewI8uoaN/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-15',
    tags: ['phishing', 'security', 'competition', 'awareness']
  },
  {
    id: 'phishtank-3',
    title: 'Phishtank',
    description: 'Social engineering awareness and defense strategies workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1XaELWNu6m9O8pDBGDXyTVsZEe9gUAdIc/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1XaELWNu6m9O8pDBGDXyTVsZEe9gUAdIc/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-15',
    tags: ['phishing', 'security', 'competition', 'awareness']
  },
  {
    id: 'phishtank-4',
    title: 'Phishtank',
    description: 'Advanced phishing detection techniques and email security protocols',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1XZhDRT928PIB1ryEm3ojYN-_o4fkQ2_d/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1XZhDRT928PIB1ryEm3ojYN-_o4fkQ2_d/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-15',
    tags: ['phishing', 'security', 'competition', 'awareness']
  },

  // 8. Web war
  {
    id: 'web-war-1',
    title: 'Web War',
    description: 'Web application security competition testing penetration testing skills',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Xvvk9Xkcjt8hm16N_GCCD2unoHgVX-Wo/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Xvvk9Xkcjt8hm16N_GCCD2unoHgVX-Wo/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-20',
    tags: ['web-security', 'competition', 'hacking', 'ctf']
  },
  {
    id: 'web-war-2',
    title: 'Web War',
    description: 'Exploiting web vulnerabilities and implementing security countermeasures',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Y9o8Utcm61io1MDYTBq3KxhnGqbNczOk/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Y9o8Utcm61io1MDYTBq3KxhnGqbNczOk/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-20',
    tags: ['web-security', 'competition', 'hacking', 'ctf']
  },
  {
    id: 'web-war-3',
    title: 'Web War',
    description: 'Advanced web application attack vectors and defense mechanisms',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Y6iaKptTm19FlSHNqE3_wwbJkD0JvxmA/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Y6iaKptTm19FlSHNqE3_wwbJkD0JvxmA/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-20',
    tags: ['web-security', 'competition', 'hacking', 'ctf']
  },
  {
    id: 'web-war-4',
    title: 'Web War',
    description: 'Real-world web security scenarios and ethical hacking practices',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Y-CM704c0DgXCnTW6r6NXzB1diHGsE1k/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Y-CM704c0DgXCnTW6r6NXzB1diHGsE1k/view?usp=drive_link',
    category: 'competitions',
    date: '2024-02-20',
    tags: ['web-security', 'competition', 'hacking', 'ctf']
  },

  // 9. Orientation
  {
    id: 'orientation-1',
    title: 'Orientation',
    description: 'Welcome session for new Cyber Knight members introducing club activities and goals',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YKmnxxpKbYX0O9jvmzj70NT-rVxgA8fu/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YKmnxxpKbYX0O9jvmzj70NT-rVxgA8fu/view?usp=drive_link',
    category: 'events',
    date: '2024-01-10',
    tags: ['orientation', 'welcome', 'introduction', 'new-members']
  },
  {
    id: 'orientation-2',
    title: 'Orientation',
    description: 'Club structure overview and cybersecurity career guidance session',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YKjFqm01rkPZROW1j802TkVocWkpcReW/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YKjFqm01rkPZROW1j802TkVocWkpcReW/view?usp=drive_link',
    category: 'events',
    date: '2024-01-10',
    tags: ['orientation', 'welcome', 'introduction', 'new-members']
  },
  {
    id: 'orientation-3',
    title: 'Orientation',
    description: 'Team building activities and introduction to cybersecurity fundamentals',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YGO4-VBGM-qF3KIqKadVy9Hxvcqreww4/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YGO4-VBGM-qF3KIqKadVy9Hxvcqreww4/view?usp=drive_link',
    category: 'events',
    date: '2024-01-10',
    tags: ['orientation', 'welcome', 'introduction', 'new-members']
  },
  {
    id: 'orientation-4',
    title: 'Orientation',
    description: 'Interactive session on club values, mission, and upcoming activities',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YF3AxSxOQ3yqgByQ-sTjNzwfJfi5fZE7/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YF3AxSxOQ3yqgByQ-sTjNzwfJfi5fZE7/view?usp=drive_link',
    category: 'events',
    date: '2024-01-10',
    tags: ['orientation', 'welcome', 'introduction', 'new-members']
  },

  // 10. Audition
  {
    id: 'audition-1',
    title: 'Audition',
    description: 'Cyber Knight recruitment process evaluating technical skills and passion for cybersecurity',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YgiM74EnEb60UlVFgz7DvFQ18VrQS83K/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YgiM74EnEb60UlVFgz7DvFQ18VrQS83K/view?usp=drive_link',
    category: 'events',
    date: '2024-01-05',
    tags: ['audition', 'recruitment', 'selection', 'interview']
  },
  {
    id: 'audition-2',
    title: 'Audition',
    description: 'Technical assessment and problem-solving challenges for prospective members',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YgRfEie1vY-cRGqsI5b71EO1iM3RCiHP/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YgRfEie1vY-cRGqsI5b71EO1iM3RCiHP/view?usp=drive_link',
    category: 'events',
    date: '2024-01-05',
    tags: ['audition', 'recruitment', 'selection', 'interview']
  },
  {
    id: 'audition-3',
    title: 'Audition',
    description: 'Interview process focusing on cybersecurity knowledge and leadership potential',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YZazKjPEgDs8ltEAfEsxlCsXpyKy01hW/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YZazKjPEgDs8ltEAfEsxlCsXpyKy01hW/view?usp=drive_link',
    category: 'events',
    date: '2024-01-05',
    tags: ['audition', 'recruitment', 'selection', 'interview']
  },
  {
    id: 'audition-4',
    title: 'Audition',
    description: 'Final selection round with practical cybersecurity challenges and team exercises',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YT06sfDFGWH-GOIgMoQafQHzW-8EmxLJ/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YT06sfDFGWH-GOIgMoQafQHzW-8EmxLJ/view?usp=drive_link',
    category: 'events',
    date: '2024-01-05',
    tags: ['audition', 'recruitment', 'selection', 'interview']
  },

  // 11. Dimensions to break in
  {
    id: 'dimensions-1',
    title: 'Dimensions to Break In',
    description: 'Multi-dimensional cybersecurity challenge exploring various attack vectors and defense strategies',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YpAIu3h0qnowzu7bqz7wgROI1v2jttJw/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YpAIu3h0qnowzu7bqz7wgROI1v2jttJw/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-01',
    tags: ['dimensions', 'breaking', 'challenge', 'competition']
  },
  {
    id: 'dimensions-2',
    title: 'Dimensions to Break In',
    description: 'Complex security scenarios requiring innovative thinking and technical expertise',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YoDLc-S1nk1jvRtII6Sen-QPWn3lKkFH/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YoDLc-S1nk1jvRtII6Sen-QPWn3lKkFH/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-01',
    tags: ['dimensions', 'breaking', 'challenge', 'competition']
  },
  {
    id: 'dimensions-3',
    title: 'Dimensions to Break In',
    description: 'Advanced penetration testing competition with real-world simulation environments',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1YjbI3H4rYy3XtZSi3MS4w-zXXGMBaSLr/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1YjbI3H4rYy3XtZSi3MS4w-zXXGMBaSLr/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-01',
    tags: ['dimensions', 'breaking', 'challenge', 'competition']
  },
  {
    id: 'dimensions-4',
    title: 'Dimensions to Break In',
    description: 'Team-based security challenges testing collaboration and problem-solving skills',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Yi25_b9wOHbzN1StGzctFx9xuCxBGRB4/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Yi25_b9wOHbzN1StGzctFx9xuCxBGRB4/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-01',
    tags: ['dimensions', 'breaking', 'challenge', 'competition']
  },

  // 12. Forensic frontier
  {
    id: 'forensic-1',
    title: 'Forensic Frontier',
    description: 'Digital forensics competition analyzing cyber crime evidence and investigation techniques',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZZMH_tzPKsENpBiJ-Lq7Z7Ae4jQUTWnO/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZZMH_tzPKsENpBiJ-Lq7Z7Ae4jQUTWnO/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-05',
    tags: ['forensics', 'investigation', 'digital', 'competition']
  },
  {
    id: 'forensic-2',
    title: 'Forensic Frontier',
    description: 'Advanced forensic analysis tools and methodologies workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZfpPIvDV7V99XU519bwmHvONmCd4b3Vy/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZfpPIvDV7V99XU519bwmHvONmCd4b3Vy/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-05',
    tags: ['forensics', 'investigation', 'digital', 'competition']
  },
  {
    id: 'forensic-3',
    title: 'Forensic Frontier',
    description: 'Incident response and evidence preservation techniques training',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZeNEn7XRwydzxwSYVARuYE1rts0XhoOn/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZeNEn7XRwydzxwSYVARuYE1rts0XhoOn/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-05',
    tags: ['forensics', 'investigation', 'digital', 'competition']
  },
  {
    id: 'forensic-4',
    title: 'Forensic Frontier',
    description: 'Real-world forensic case studies and hands-on investigation exercises',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Z_06LfN14KmEe8BNxgisJvXFc6ckzzc3/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Z_06LfN14KmEe8BNxgisJvXFc6ckzzc3/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-05',
    tags: ['forensics', 'investigation', 'digital', 'competition']
  },

  // 13. Rising star senior secondary school
  {
    id: 'rising-star-1',
    title: 'Rising Star Senior Secondary School',
    description: 'Educational outreach program at Rising Star School promoting cybersecurity awareness',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Zj9iDSwUTO2lu7iz6arecKXC99JxUouH/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Zj9iDSwUTO2lu7iz6arecKXC99JxUouH/view?usp=drive_link',
    category: 'events',
    date: '2024-03-10',
    tags: ['school-visit', 'outreach', 'education', 'awareness']
  },
  {
    id: 'rising-star-2',
    title: 'Rising Star Senior Secondary School',
    description: 'Interactive workshop on digital citizenship and online safety for students',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZoYhnn8wjF_Iy5_mYJijIKQwg06COhVN/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZoYhnn8wjF_Iy5_mYJijIKQwg06COhVN/view?usp=drive_link',
    category: 'events',
    date: '2024-03-10',
    tags: ['school-visit', 'outreach', 'education', 'awareness']
  },
  {
    id: 'rising-star-3',
    title: 'Rising Star Senior Secondary School',
    description: 'Cybersecurity career guidance and technology demonstration session',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZlKplR86US_VE_9NAYI1CMlswNJDIDSR/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZlKplR86US_VE_9NAYI1CMlswNJDIDSR/view?usp=drive_link',
    category: 'events',
    date: '2024-03-10',
    tags: ['school-visit', 'outreach', 'education', 'awareness']
  },
  {
    id: 'rising-star-4',
    title: 'Rising Star Senior Secondary School',
    description: 'Collaborative learning activities and cybersecurity awareness games',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Zl4h7PdaJHABGjQupFS1GjnBTwFoX_C9/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Zl4h7PdaJHABGjQupFS1GjnBTwFoX_C9/view?usp=drive_link',
    category: 'events',
    date: '2024-03-10',
    tags: ['school-visit', 'outreach', 'education', 'awareness']
  },

  // 14. Cyber safe staff
  {
    id: 'cyber-safe-1',
    title: 'Cyber Safe Staff',
    description: 'Professional development workshop for faculty and staff on cybersecurity best practices',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1Zq3WtlGH66trv_InMmLlP2CcZObl4gBS/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1Zq3WtlGH66trv_InMmLlP2CcZObl4gBS/view?usp=drive_link',
    category: 'workshops',
    date: '2024-03-15',
    tags: ['staff-training', 'cybersecurity', 'awareness', 'education']
  },
  {
    id: 'cyber-safe-2',
    title: 'Cyber Safe Staff',
    description: 'Institutional security policies and data protection training for educators',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZxChWKbxEyK6V1Nyolbd53evO8ooHVa2/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZxChWKbxEyK6V1Nyolbd53evO8ooHVa2/view?usp=drive_link',
    category: 'workshops',
    date: '2024-03-15',
    tags: ['staff-training', 'cybersecurity', 'awareness', 'education']
  },
  {
    id: 'cyber-safe-3',
    title: 'Cyber Safe Staff',
    description: 'Practical cybersecurity tools and incident reporting procedures for staff',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZweHlbemcis89T5DuKSmtKeadanBsNYF/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZweHlbemcis89T5DuKSmtKeadanBsNYF/view?usp=drive_link',
    category: 'workshops',
    date: '2024-03-15',
    tags: ['staff-training', 'cybersecurity', 'awareness', 'education']
  },
  {
    id: 'cyber-safe-4',
    title: 'Cyber Safe Staff',
    description: 'Advanced threat awareness and secure communication practices workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1ZsWCW_-Ux_3dTBkpSq5dobDEAqeId020/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1ZsWCW_-Ux_3dTBkpSq5dobDEAqeId020/view?usp=drive_link',
    category: 'workshops',
    date: '2024-03-15',
    tags: ['staff-training', 'cybersecurity', 'awareness', 'education']
  },

  // 15. Defend and recover
  {
    id: 'defend-recover-1',
    title: 'Defend and Recover',
    description: 'Incident response simulation testing defense and recovery capabilities',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_0Wgxy08qQkAzQ30Z-SNrFt1O_mzYp9g/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_0Wgxy08qQkAzQ30Z-SNrFt1O_mzYp9g/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-20',
    tags: ['defense', 'recovery', 'incident-response', 'competition']
  },
  {
    id: 'defend-recover-2',
    title: 'Defend and Recover',
    description: 'Real-time cyber attack simulation and response coordination exercise',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_Du92JAYqz6uigakcgd6Rg-qgnOgIghO/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_Du92JAYqz6uigakcgd6Rg-qgnOgIghO/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-20',
    tags: ['defense', 'recovery', 'incident-response', 'competition']
  },
  {
    id: 'defend-recover-3',
    title: 'Defend and Recover',
    description: 'Business continuity planning and disaster recovery strategies workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_DJbQsEBdw8WskCr2KnNWlpQeAyKNxR5/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_DJbQsEBdw8WskCr2KnNWlpQeAyKNxR5/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-20',
    tags: ['defense', 'recovery', 'incident-response', 'competition']
  },
  {
    id: 'defend-recover-4',
    title: 'Defend and Recover',
    description: 'Advanced threat hunting and system restoration techniques training',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_9MXr-7RaYovVv4TskClew1Fv401iM53/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_9MXr-7RaYovVv4TskClew1Fv401iM53/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-20',
    tags: ['defense', 'recovery', 'incident-response', 'competition']
  },

  // 16. Password strength challenge
  {
    id: 'password-challenge-1',
    title: 'Password Strength Challenge',
    description: 'Competition testing password security knowledge and authentication best practices',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_K4jZIszovUCZfpsAzUI6WSLIxumQsBo/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_K4jZIszovUCZfpsAzUI6WSLIxumQsBo/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-25',
    tags: ['password', 'security', 'challenge', 'authentication']
  },
  {
    id: 'password-challenge-2',
    title: 'Password Strength Challenge',
    description: 'Advanced password cracking techniques and defense strategies workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_Uz-b9l1b8hNDC2gcwrj6MOGqSIfVYmb/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_Uz-b9l1b8hNDC2gcwrj6MOGqSIfVYmb/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-25',
    tags: ['password', 'security', 'challenge', 'authentication']
  },
  {
    id: 'password-challenge-3',
    title: 'Password Strength Challenge',
    description: 'Multi-factor authentication implementation and security assessment',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_P7iu5bO8w9clvrQqqa_spg4S9bkhOEE/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_P7iu5bO8w9clvrQqqa_spg4S9bkhOEE/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-25',
    tags: ['password', 'security', 'challenge', 'authentication']
  },
  {
    id: 'password-challenge-4',
    title: 'Password Strength Challenge',
    description: 'Biometric authentication and passwordless security solutions exploration',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_KjYP9KYsZMbgKpIbMcYRmKpxUn91ZpW/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_KjYP9KYsZMbgKpIbMcYRmKpxUn91ZpW/view?usp=drive_link',
    category: 'competitions',
    date: '2024-03-25',
    tags: ['password', 'security', 'challenge', 'authentication']
  },

  // 17. Cyber heist
  {
    id: 'cyber-heist-1',
    title: 'Cyber Heist',
    description: 'Simulated cyber attack scenario testing red team and blue team capabilities',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1aFPgPvXklQfhCXXo2sXn2lImROGj_ssJ/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1aFPgPvXklQfhCXXo2sXn2lImROGj_ssJ/view?usp=drive_link',
    category: 'competitions',
    date: '2024-04-01',
    tags: ['heist', 'simulation', 'competition', 'hacking']
  },
  {
    id: 'cyber-heist-2',
    title: 'Cyber Heist',
    description: 'Advanced persistent threat simulation and detection challenge',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1aCqCtY0shsJTyqu_IzbQdKUoFsXjOcrp/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1aCqCtY0shsJTyqu_IzbQdKUoFsXjOcrp/view?usp=drive_link',
    category: 'competitions',
    date: '2024-04-01',
    tags: ['heist', 'simulation', 'competition', 'hacking']
  },
  {
    id: 'cyber-heist-3',
    title: 'Cyber Heist',
    description: 'Financial cybercrime investigation and prevention strategies workshop',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1a0t1IDLX07qYKzUUubxfhvpeRvsttx10/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1a0t1IDLX07qYKzUUubxfhvpeRvsttx10/view?usp=drive_link',
    category: 'competitions',
    date: '2024-04-01',
    tags: ['heist', 'simulation', 'competition', 'hacking']
  },
  {
    id: 'cyber-heist-4',
    title: 'Cyber Heist',
    description: 'Ethical hacking competition with real-world attack scenarios',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1a--GLg7pm52zWmDsjiavM4DscDERLozP/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1a--GLg7pm52zWmDsjiavM4DscDERLozP/view?usp=drive_link',
    category: 'competitions',
    date: '2024-04-01',
    tags: ['heist', 'simulation', 'competition', 'hacking']
  },

  // 18. Cyber nexus
  {
    id: 'cyber-nexus-1',
    title: 'Cyber Nexus',
    description: 'Annual cybersecurity conference bringing together industry experts and students',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_omA85MdyZXTwynEwZBIOfNm8CEthaY7/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_omA85MdyZXTwynEwZBIOfNm8CEthaY7/view?usp=drive_link',
    category: 'events',
    date: '2024-04-05',
    tags: ['nexus', 'networking', 'collaboration', 'event']
  },
  {
    id: 'cyber-nexus-2',
    title: 'Cyber Nexus',
    description: 'Technology showcase and innovation exhibition featuring cutting-edge security solutions',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_d4bVQSZbbK6PWeJgYsBiVJJUsj_oWAn/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_d4bVQSZbbK6PWeJgYsBiVJJUsj_oWAn/view?usp=drive_link',
    category: 'events',
    date: '2024-04-05',
    tags: ['nexus', 'networking', 'collaboration', 'event']
  },
  {
    id: 'cyber-nexus-3',
    title: 'Cyber Nexus',
    description: 'Professional networking event connecting cybersecurity professionals and students',
    imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1_nU3o9ymJCNMqiEcWK3fDOQl-RgqT6hk/view?usp=drive_link'),
    driveUrl: 'https://drive.google.com/file/d/1_nU3o9ymJCNMqiEcWK3fDOQl-RgqT6hk/view?usp=drive_link',
    category: 'events',
    date: '2024-04-05',
    tags: ['nexus', 'networking', 'collaboration', 'event']
  }
];

export const photoCategories = {
  events: 'Events & Ceremonies',
  workshops: 'Workshops & Training',
  competitions: 'Competitions & CTFs',
  team: 'Team & Leadership'
};