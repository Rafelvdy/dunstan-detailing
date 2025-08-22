import styles from "./services.module.css"
import ServiceCard from "@/components/ui/serviceCard/serviceCard"
 
export default function Services() {
    return (
        <section className={styles.ServicesContainer} id="services">
            <h2 className={styles.ServicesTitle}>What We Offer...</h2>
            <p className={styles.ServicesSubtitle}>We specialise in car owners who want to maintain or enhance the appearance and condition of their vehicles. 
                This includes working professionals, car enthusiasts, and local businesses with company vehicles.</p>
            <div className={styles.ServicesCardContainer}>
                <ServiceCard
                     title="DD Interior"
                     contents={["Vacuum throughout carpets and seats.", 
                                "Dash and console wiped over with interior detailer.", 
                                "Doors cleaned.", 
                                "Interior glass cleaned.", 
                                "Odor eliminator applied."
                                ]}
                     price="Starting From £40"
                />
                <ServiceCard
                     title="DD One Day Interior Detail"
                     contents={["Deep pile vacumed on carpets and matts.", 
                                "Carpets and matts shampooed.", 
                                "Roof lining cleaned.", 
                                "Seats vacuumed and shampooed / leather seats cleaned and conditioned.", 
                                "Doors and trims cleaned.",
                                "Boot vacuumed.",
                                "Interior glass cleaned.",
                                "Dash and consoles cleaned with soft brush and microfiber cloth.",
                                "Vents and crevices cleaned.",
                                "Finished with interior detailer.",
                                "Odor eliminator applied throughout."
                                ]}
                     price="Starting From £200"
                />

                <ServiceCard
                     title="DD Gold Enhance Detail"
                     contents={["Wheels, tyres and arches cleaned.", 
                                "Pre wash and snow foam.", 
                                "2 bucket wash.",   
                                "Clay towel decontamination.", 
                                "Air and towel dried.",
                                "Machine polish to refresh paint.",
                                "3 to 6 month ceramic spray on paint.",
                                "Interior dusted and vacuumed throughout.",
                                "Light shampoo on matts",
                                "Dash, doors and consoles cleaned",
                                "Interior dressed",
                                "Glass cleaned"
                                ]}
                     price="Starting From £350"
                />

                <ServiceCard
                    title="DD Diamond Enhancement Detail"
                    contents={["Wheels, tyres and arches cleaned.", 
                                "Pre wash and snow foam.", 
                                "Door shuts, fuel cap, badges, grills and seams pre cleaned with soft brushes.",
                                "2 bucket wash.", 
                                "3 stage decontamination.",
                                "Air dry and plush microfiber towel dried.", 
                                "Glass cleaned.",
                                "Front windscreen coating applied.",
                                "Tyres dressed.",
                                "Machine polish to enhance paintwork.",
                                "3 year ceramic coating applied.",
                                "Interior thoroughly hoovered throughout.",
                                "Light shampoo throughout carpets and matts.",
                                "Leather cleaned and conditioned.",
                                "Seats light shampoo.",
                                "Dash, doors and consoles cleaned.",
                                "Vents and crevices cleaned.",
                                "Interior glass cleaned.",
                                "Interior dressed."
                            ]}
                     price="Starting From £800"
                />

                <ServiceCard
                    title="DD Ultimate Vehicle Protection"
                    contents={["Wheels and tyres cleaned.",
                                "Wheels decontaminated.", 
                                "Arches cleaned.",
                                "Pre wash and Snow foam.",
                                "Door shuts, fuel cap, badges, grills and seams pre cleaned with soft brushes.",
                                "Exterior 2 bucket wash.",
                                "3 stage decontamination.",
                                "Air dry and plush microfiber towel dried.",
                                "Glass cleaned and polished.",
                                "1 or 2 stage correction to remove 80% of defects.",
                                "All surfaces prepped for coatings.",
                                "Up to 2 year glass coating applied.",
                                "Up to 2 year Wheel ceramic coating.",
                                "Up to 7 year ceramic coating on paint.",
                                "Door shuts ceramic coated.",
                                "Interior thoroughly vacuumed.",
                                "Dash and doors cleaned.",
                                "Vents and crevices cleaned.",
                                "Seats cleaned.",
                                "Carpets and matts cleaned.",
                                "Carpets, mats and fabric protected with gtechniq smart fabric.",
                                "Dash, doors and plastics protected.",
                                "All leather protected with gtechniq leather guard.",
                                "Interior glass protected."
                            ]}
                     price="Starting From £1300"
                />

                <ServiceCard
                     title="DD Pro Wash 8"
                     contents={["Wheels cleaned.", 
                                "Arches rinsed.", 
                                "Snow foam pre wash.", 
                                "2 bucket wash.", 
                                "Dried with microfiber towel and detailer.",
                                "Door seals wiped.",
                                "Exterior glass cleaned.",
                                "Tyres dressed."
                                ]}
                     price="Starting From £60"
                />
                <ServiceCard
                     title="DD Pro Wash 12"
                     contents={["Wheels cleaned.", 
                                "Arches cleaned.",
                                "Pre wash bug and grime pre wash.", 
                                "Snow foam.", 
                                "2 bucket wash.",
                                "Door shuts washed.", 
                                "Dried with plush microfiber towel and detailer.",
                                "Glass cleaned in and out.",
                                "Hoover carpets and seats.",
                                "Dash and doors wiped with interior detailer.",
                                "Exterior sealant application on all surfaces.",
                                "Tyres dressed."
                                ]}
                     price="Starting From £100"
                />
                <ServiceCard
                     title="3 Year Ceramic Coating"
                     contents={["Wheels and tyres cleaned.", 
                                "Pre wash and snow foam.", 
                                "2 bucket wash.", 
                                "3 stage paint decontamination.", 
                                "Machine polish.",
                                "Paint prep for ceramic coating.",
                                "3 year ceramic coating applied."
                                ]}
                     price="Starting From £450"
                />
                <ServiceCard
                     title="5 Year Ceramic Coating"
                     contents={["Wheels and tyres cleaned.",
                                "Wheel arches cleaned.", 
                                "Pre wash and snow foam.", 
                                "2 bucket wash.", 
                                "3 stage paint decontamination.", 
                                "Machine polish.",
                                "Paint prep for ceramic coating.",
                                "5 year ceramic coating applied."
                                ]}
                     price="Starting From £700"
                />

                <ServiceCard
                     title="Maintenance Plans"
                     contents={["Depending on the level of maintenance required"]}
                     price="Starting From £50 to £150"
                />
            </div>
        </section>
    )
}