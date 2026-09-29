export default function ScaleApplications() {
  const items = [
    {
      category: "Residential",
      title: "Smart Home Energy",
      description: "Clean, quiet solar energy powering modern smart homes.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEFLdlVlkv9LhAsZxFAfZqva9tbOaajRs02h2SFtSMSqQyU1H0q0R7Ns6ZTyP1gx4V_mNCXXBnyaPHvU4tL_20UurqvzH9vs9CCMHVaJjhaYqc38thQpOIKOJefqOFOAyzVHDkpHa8WUAvpBIb_rh3nYs7w0pW6YW3opErbStAKHO1oxbZJ9GwKOdf-oDGFbmbdTfnGXkz8GPqkgonIAEryPlJVlBbvJVbzpH1yfB1",
      accent: "primary-fixed",
    },
    {
      category: "Commercial",
      title: "Enterprise Solar",
      description: "Reduced operating expenses and peak-shaving for enterprises.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvjVhFBQp0z-XQh15MFLQ8bUlvx8dDvfsEhtwJMHedPSQJPSbiAVAIDRNnDYIMXYE-LNM2nwHrhHzxh_Gyl4H4eSd-9xyESb16ZVPCKh-f2Y11MosPxSj6m8pP_6AGuPDMCuAnwHHhg2QbExgQHbQmVxfG1cySwXreDNYikuBZV0u1ZUU_7-3JtJgsGMQMyL4t728-RP_we4z-eUPrPt4jEZJ3rjRm6THdeioYXgfZ",
      accent: "primary-fixed",
    },
    {
      category: "Industrial",
      title: "Mega-Watt EPC",
      description: "High-capacity mega-watt clean energy systems for factories and processing facilities.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLgEb36kqSeG9ixZ4V3vZWONK8IheDO7Z4VmT7Smm1MrKtoWx0h8B7yYLErBkSTMr2S0WQr14UqR7Mon7P6dolVtX2oHq4-5olpa79VPWUUDI0RxkrHqGZpeo1R5B3fZg9nomDmpKPztSE-5gclOKRwXsXsUl7_pEAM1l28P2Ix9LskaMO7r_zsGvo14PyAPZ7qFcIBcvsvXmaTpGY36a2sS3LIXqDMqm8TqPyP96C",
      accent: "primary-fixed",
    },
    {
      category: "Hybrid & Storage",
      title: "Battery Storage",
      description: "Intelligent lithium battery storage and uninterrupted backup power.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDclo-uEhVD7K37YkIs8OGFoTnqzSLhrt2KyPd71u1mjZbL6iA_MpICF3w1fujWLwamLV9NeSCsz9D19_Ye04xEQqLlYTxSXC97tFTJtnKAtQ4OVqt_41QWS-cW3TDPh41P2ZzFf7pKZDLps3fxXxraLVoRKrvzu4Z6mebnrXkM6J_F-X6fvpq0GDoCxIktTXV2jUls_83iyPhX9iboOMGyRvgHe6hquDVrFfvY5ON7",
      accent: "tertiary-fixed",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-semibold">
            Scale &amp; Applications
          </span>
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold mt-1">
            Engineered for Every Scale
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Tailored clean energy installations from residential rooftops to utility-scale commercial setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl overflow-hidden h-96 group shadow-md flex flex-col justify-end p-6"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/60 to-transparent" />
              <div className="relative z-10 text-surface-container-lowest">
                <span className="text-xs uppercase tracking-wider text-primary-fixed font-semibold">
                  {item.category}
                </span>
                <h3 className="font-plus-jakarta text-xl font-bold mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-outline-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
