import type { TeamMembersContent, TeamMember } from "@site/lib/cms/homePageTypes";

const DEFAULT_FEATURED = {
  name: "Liam Carter",
  role: "LAWYER AND FOUNDER",
  image: "https://designs-mercury.netlify.app/images/Rectangle-174-min.png",
  imageAlt: "Liam Carter",
  email: "paul@dummylaw.com",
  phone: "4045555555",
  phoneDisplay: "404-555-5555",
  facebookUrl: "#",
  instagramUrl: "#",
};

const DEFAULT_MEMBERS: TeamMember[] = [
  { name: "Noah Mitchell", role: "ATTORNEY", image: "https://designs-mercury.netlify.app/images/image-11-min.png", imageAlt: "Noah Mitchell" },
  { name: "Ethan Reed",    role: "ATTORNEY", image: "https://designs-mercury.netlify.app/images/image-12-min.png", imageAlt: "Ethan Reed" },
  { name: "Sophia Lane",   role: "ATTORNEY", image: "https://designs-mercury.netlify.app/images/Rectangle-173-min.png", imageAlt: "Sophia Lane" },
  { name: "Ava Brooks",    role: "ATTORNEY", image: "https://designs-mercury.netlify.app/images/Rectangle-175-min.png", imageAlt: "Ava Brooks" },
  { name: "Lucas Hayes",   role: "ATTORNEY", image: "https://designs-mercury.netlify.app/images/Rectangle-176-min.png", imageAlt: "Lucas Hayes" },
  { name: "Owen Parker",   role: "ATTORNEY", image: "https://designs-mercury.netlify.app/images/Rectangle-177-min.png", imageAlt: "Owen Parker" },
];

interface TeamMembersSectionProps {
  content: TeamMembersContent;
}

export default function TeamMembersSection({ content }: TeamMembersSectionProps) {
  const featured = content.featured?.name ? content.featured : DEFAULT_FEATURED;
  const members = content.members?.length ? content.members : DEFAULT_MEMBERS;

  const phone = featured.phone || DEFAULT_FEATURED.phone;
  const phoneDisplay = featured.phoneDisplay || featured.phone || DEFAULT_FEATURED.phoneDisplay;

  return (
    <div className="bg-white w-full" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
      <div className="mx-auto" style={{ maxWidth: "2560px", width: "90%" }}>
        <div className="flex" style={{ gap: "32px" }}>

          {/* Left — Featured attorney */}
          <div style={{ width: "29.67%" }}>
            <div className="mx-auto" style={{ maxWidth: "550px" }}>
              {/* Photo */}
              <div className="text-center" style={{ marginBottom: "30px" }}>
                <img
                  alt={featured.imageAlt || featured.name}
                  width={534}
                  height={545}
                  loading="lazy"
                  src={featured.image}
                  style={{ aspectRatio: "534/545", display: "inline-block", maxWidth: "100%", verticalAlign: "middle", width: "100%" }}
                />
              </div>

              {/* Name + Role */}
              <div style={{ textAlign: "left" }}>
                <h4
                  className="font-archivo font-bold"
                  style={{ color: "rgb(42,110,66)", fontSize: "26px", lineHeight: "26px", paddingBottom: "10px" }}
                >
                  {featured.name}
                </h4>
                <p
                  className="font-archivo"
                  style={{ color: "rgb(81,81,81)", fontSize: "24px", lineHeight: "36px" }}
                >
                  {featured.role}
                </p>
              </div>

              {/* Spacer */}
              <div style={{ height: "23px" }} />

              {/* Email */}
              <div className="flex items-center">
                <div style={{ width: "32px" }}>
                  <span style={{ color: "rgb(42,110,66)", fontSize: "24px", display: "inline-block" }}>✉</span>
                </div>
                <div style={{ paddingLeft: "15px" }}>
                  <h4
                    className="font-archivo"
                    style={{ color: "rgb(81,81,81)", fontSize: "18px", lineHeight: "18px", paddingBottom: "10px" }}
                  >
                    {featured.email}
                  </h4>
                </div>
              </div>

              {/* Spacer */}
              <div style={{ height: "23px" }} />

              {/* Phone */}
              <div className="flex items-center">
                <div style={{ width: "32px" }}>
                  <span style={{ color: "rgb(42,110,66)", fontSize: "24px", display: "inline-block" }}>☎</span>
                </div>
                <div style={{ paddingLeft: "15px" }}>
                  <a
                    href={`tel:${phone}`}
                    className="font-archivo hover:opacity-80 transition-opacity duration-150"
                    style={{ color: "rgb(81,81,81)", fontSize: "18px", lineHeight: "18px", paddingBottom: "10px", display: "inline" }}
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Spacer */}
              <div style={{ height: "23px" }} />

              {/* Social icons */}
              <ul className="flex items-center" style={{ gap: "8px" }}>
                {/* Facebook */}
                <li>
                  <a
                    href={featured.facebookUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow on Facebook"
                    className="inline-flex items-center justify-center transition-colors duration-300 hover:bg-brand-green group"
                    style={{
                      backgroundColor: "rgb(255,255,255)",
                      border: "1.81818px solid rgb(42,110,66)",
                      borderRadius: "3px",
                      height: "32px",
                      width: "32px",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(42,110,66)">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </li>
                {/* Instagram */}
                <li>
                  <a
                    href={featured.instagramUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow on Instagram"
                    className="inline-flex items-center justify-center transition-colors duration-300 hover:bg-brand-green group"
                    style={{
                      backgroundColor: "rgb(255,255,255)",
                      border: "1.81818px solid rgb(42,110,66)",
                      borderRadius: "3px",
                      height: "32px",
                      width: "32px",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(42,110,66)">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right — 3-column attorney grid */}
          <div style={{ width: "64.83%" }}>
            <div
              style={{
                display: "grid",
                gap: "32px",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              }}
            >
              {members.map((member, i) => (
                <div key={i} className="mx-auto" style={{ maxWidth: "550px", width: "100%" }}>
                  <div className="text-center" style={{ marginBottom: "30px" }}>
                    <img
                      alt={member.imageAlt || member.name}
                      width={404}
                      height={371}
                      loading="lazy"
                      src={member.image}
                      style={{ aspectRatio: "404/371", display: "inline-block", maxWidth: "100%", verticalAlign: "middle", width: "100%" }}
                    />
                  </div>
                  <div className="text-center">
                    <h4
                      className="font-archivo font-bold text-center"
                      style={{ color: "rgb(42,110,66)", fontSize: "26px", lineHeight: "26px", paddingBottom: "10px" }}
                    >
                      {member.name}
                    </h4>
                    <p
                      className="font-archivo text-center"
                      style={{ color: "rgb(81,81,81)", fontSize: "18px", lineHeight: "27px" }}
                    >
                      {member.role}
                    </p>
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
