import type { AboutTeamMembersContent, AboutTeamMemberItem } from "@site/lib/cms/aboutPageTypes";

const BASE = "https://designs-mercury.netlify.app/images";

const DEFAULT_FEATURED = {
  name: "Liam Carter",
  role: "LAWYER AND FOUNDER",
  image: `${BASE}/Rectangle-174-min.png`,
  imageAlt: "Liam Carter",
  bio: "With over 25 years of experience in personal injury law, Liam founded Constellation Law to provide compassionate, aggressive representation to injury victims across Atlanta. His dedication to justice has resulted in billions won for clients.",
  email: "paul@dummylaw.com",
  phone: "4045555555",
  phoneDisplay: "404-555-5555",
  facebookUrl: "#",
  instagramUrl: "#",
};

const DEFAULT_MEMBERS: AboutTeamMemberItem[] = [
  { name: "Noah Mitchell", role: "ATTORNEY", image: `${BASE}/image-11-min.png`, imageAlt: "Noah Mitchell", bio: "Specializing in car accident cases, Noah brings 15+ years of experience and a passion for client advocacy to every case." },
  { name: "Ethan Reed", role: "ATTORNEY", image: `${BASE}/image-12-min.png`, imageAlt: "Ethan Reed", bio: "With a focus on medical malpractice, Ethan has secured millions in settlements for victims of medical negligence." },
  { name: "Sophia Lane", role: "ATTORNEY", image: `${BASE}/Rectangle-173-min.png`, imageAlt: "Sophia Lane", bio: "Sophia's expertise in wrongful death cases has helped families find justice during their darkest hours." },
  { name: "Ava Brooks", role: "ATTORNEY", image: `${BASE}/Rectangle-175-min.png`, imageAlt: "Ava Brooks", bio: "A fierce advocate for workplace injury victims, Ava has recovered over $50M in workers' compensation claims." },
  { name: "Lucas Hayes", role: "ATTORNEY", image: `${BASE}/Rectangle-176-min.png`, imageAlt: "Lucas Hayes", bio: "Lucas specializes in product liability, holding manufacturers accountable for defective products." },
  { name: "Owen Parker", role: "ATTORNEY", image: `${BASE}/Rectangle-177-min.png`, imageAlt: "Owen Parker", bio: "With expertise in premises liability, Owen ensures property owners are held responsible for dangerous conditions." },
];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(42,110,66)" style={{ width: 16, height: 16 }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(42,110,66)" style={{ width: 16, height: 16 }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const socialBtnStyle: React.CSSProperties = {
  alignItems: "center",
  backgroundColor: "rgb(255,255,255)",
  border: "1.818px solid rgb(42,110,66)",
  borderRadius: 3,
  display: "inline-flex",
  height: 32,
  justifyContent: "center",
  width: 32,
  transition: "all 0.3s",
};

interface Props {
  content: AboutTeamMembersContent;
}

export default function AboutTeamMembersSection({ content }: Props) {
  const featured = content?.featured?.name ? content.featured : DEFAULT_FEATURED;
  const members = content?.members?.length ? content.members : DEFAULT_MEMBERS;

  return (
    <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 32, paddingTop: 32, width: "100%" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, width: "90%" }}>
        <div style={{ display: "flex", gap: 32 }}>

          {/* Featured attorney — left column 29.67% */}
          <div style={{ width: "29.67%" }}>
            <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 550 }}>
              {/* Photo */}
              <div style={{ marginBottom: 30, textAlign: "center" }}>
                <img
                  src={featured.image}
                  alt={featured.imageAlt || featured.name}
                  loading="lazy"
                  style={{ display: "inline-block", maxWidth: "100%", width: "100%", verticalAlign: "middle" }}
                />
              </div>
              {/* Name & role */}
              <div style={{ textAlign: "left" }}>
                <h4 className="font-archivo font-bold" style={{ color: "rgb(42,110,66)", fontSize: 26, lineHeight: "26px", paddingBottom: 10 }}>
                  {featured.name}
                </h4>
                <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontSize: 24, lineHeight: "36px" }}>
                  {featured.role}
                </p>
              </div>
              {/* Bio */}
              {featured.bio && (
                <div style={{ marginTop: 20 }}>
                  <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontSize: 18, fontWeight: 300, lineHeight: "28px" }}>
                    {featured.bio}
                  </p>
                </div>
              )}
              {/* Email */}
              {featured.email && (
                <>
                  <div style={{ height: 23 }} />
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <div style={{ width: 32, color: "rgb(42,110,66)", fontSize: 24 }}>✉</div>
                    <div style={{ paddingLeft: 15 }}>
                      <a href={`mailto:${featured.email}`} className="font-archivo" style={{ color: "rgb(81,81,81)", fontSize: 18, lineHeight: "18px", textDecoration: "none" }}>
                        {featured.email}
                      </a>
                    </div>
                  </div>
                </>
              )}
              {/* Phone */}
              {featured.phoneDisplay && (
                <>
                  <div style={{ height: 23 }} />
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <div style={{ width: 32, color: "rgb(42,110,66)", fontSize: 24 }}>☎</div>
                    <div style={{ paddingLeft: 15 }}>
                      <a href={`tel:${featured.phone}`} className="font-archivo" style={{ color: "rgb(81,81,81)", fontSize: 18, lineHeight: "18px", textDecoration: "none" }}>
                        {featured.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </>
              )}
              {/* Social icons */}
              <div style={{ height: 23 }} />
              <ul style={{ alignItems: "center", display: "flex", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a href={featured.facebookUrl || "#"} target="_blank" rel="noopener noreferrer" title="Follow on Facebook" style={socialBtnStyle}>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href={featured.instagramUrl || "#"} target="_blank" rel="noopener noreferrer" title="Follow on Instagram" style={socialBtnStyle}>
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Team grid — right column 64.83% */}
          <div style={{ width: "64.83%" }}>
            <div style={{ display: "grid", gap: 32, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {members.map((member, i) => (
                <div key={i} style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 550, width: "100%" }}>
                  <div style={{ marginBottom: 30, textAlign: "center" }}>
                    <img
                      src={member.image}
                      alt={member.imageAlt || member.name}
                      loading="lazy"
                      style={{ display: "inline-block", maxWidth: "100%", width: "100%", verticalAlign: "middle" }}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h4 className="font-archivo font-bold" style={{ color: "rgb(42,110,66)", fontSize: 26, lineHeight: "26px", paddingBottom: 10 }}>
                      {member.name}
                    </h4>
                    <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontSize: 18, lineHeight: "27px" }}>
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontWeight: 300, marginTop: 15 }}>
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
