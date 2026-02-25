export const serviceWorkflowData = {
    windowTinting: {
        // Service badge
        badge: "Service Details",

        // About Service Section
        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we provide premium automotive window tinting tailored to your vehicle and personal preferences. Using top-quality films and expert installation techniques, we ensure:",
            features: [
                "Heat reduction and glare control",
                "UV ray protection for interior surfaces",
                "Enhanced privacy for you and your passengers",
                "A modern, stylish finish that elevates your vehicle's appearance"
            ],
            outro: "Our team handles every detail with precision, from measurement to installation, ensuring a smooth, bubble-free finish that lasts for years.",

            // What's Included
            includedTitle: "What is included?",
            includedIntro: "Our window tinting service includes:",
            includedItems: [
                "Professional assessment of your vehicle's windows",
                "High-quality film selection for optimal heat and UV reduction",
                "Precise measurement and cutting of tint film",
                "Expert installation with a flawless, long-lasting finish",
                "Post-installation care advice and support"
            ],
            includedOutro: "We focus on precision, quality, and customer satisfaction in every project."
        },

        // How We Work Section
        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "Our streamlined process ensures a hassle-free experience while delivering high-quality results for every vehicle.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule a convenient appointment. Our technicians inspect your vehicle, discuss tint options, and recommend the best solution for your needs."
                },
                {
                    id: "02",
                    title: "Work Planning",
                    description: "We prepare the film and plan the installation process for a smooth, efficient workflow tailored to your vehicle."
                },
                {
                    id: "03",
                    title: "Fix And Install",
                    description: "Our experts carefully install the tint, ensuring perfect alignment, no bubbles, and a professional finish."
                },
                {
                    id: "04",
                    title: "Works Completed",
                    description: "We finalize the job with quality checks and provide post-installation advice to maintain the longevity of your tint."
                }
            ]
        },

        // Service Benefits Section
        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for window tinting gives you:",
            items: [
                "Improved driving comfort with reduced heat and glare",
                "Protection against UV damage to your interior and skin",
                "Enhanced vehicle privacy and security",
                "Sleek, stylish appearance that elevates your car's look",
                "Long-lasting results from high-quality materials and professional installation"
            ],
            outro: "We prioritize precision, reliability, and customer satisfaction, delivering a tint that looks great and performs even better.",
            image: "tint-a.jpeg",
            imageAlt: "Window tinting work"
        },

        // Contact Form
        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Remodelling Service",
                        "Faucet & Leak Repairs"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Get Your Vehicle Tinted Today"
        },

        // Theme Colors
        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },

    // // You can add more services here
    // plumbing: {
    //     badge: "Service Details",
    //     aboutService: {
    //         title: "Plumbing Service",
    //         intro: "Professional plumbing services...",
    //         features: [
    //             "Emergency repairs",
    //             "Installation services",
    //             "Maintenance and inspection"
    //         ],
    //         outro: "Quality plumbing solutions for your needs.",
    //         includedTitle: "What is included?",
    //         includedIntro: "Our plumbing service includes:",
    //         includedItems: [
    //             "Initial consultation",
    //             "Professional diagnosis",
    //             "Quality repairs",
    //             "Follow-up support"
    //         ],
    //         includedOutro: "We ensure lasting solutions."
    //     },
    //     howWeWork: {
    //         badge: "Working Process",
    //         title: "How We Work",
    //         description: "Our efficient plumbing process.",
    //         steps: [
    //             {
    //                 id: "01",
    //                 title: "Inspection",
    //                 description: "Thorough inspection of the issue."
    //             },
    //             {
    //                 id: "02",
    //                 title: "Quote",
    //                 description: "Transparent pricing and estimates."
    //             },
    //             {
    //                 id: "03",
    //                 title: "Repair",
    //                 description: "Professional repair work."
    //             },
    //             {
    //                 id: "04",
    //                 title: "Quality Check",
    //                 description: "Final inspection and testing."
    //             }
    //         ]
    //     },
    //     benefits: {
    //         badge: "Benefits",
    //         title: "Service Benefits",
    //         intro: "Why choose our plumbing services:",
    //         items: [
    //             "Licensed professionals",
    //             "24/7 emergency service",
    //             "Quality parts and materials",
    //             "Competitive pricing",
    //             "Satisfaction guaranteed"
    //         ],
    //         outro: "Your trusted plumbing partner.",
    //         image: "plumbing.jpg",
    //         imageAlt: "Plumbing service work"
    //     },
    //     contactForm: {
    //         title: "Get In Touch",
    //         fields: {
    //             fullName: {
    //                 label: "Full Name",
    //                 placeholder: "John Doe",
    //                 type: "text"
    //             },
    //             phone: {
    //                 label: "Phone",
    //                 placeholder: "Enter your phone number",
    //                 type: "tel"
    //             },
    //             service: {
    //                 label: "Select A Service",
    //                 options: [
    //                     "Emergency Repair",
    //                     "Installation",
    //                     "Maintenance"
    //                 ]
    //             },
    //             note: {
    //                 label: "Short Note",
    //                 placeholder: "Describe your issue",
    //                 rows: 4
    //             }
    //         },
    //         submitButton: "Request Service"
    //     },
    //     colors: {
    //         primary: "#F21B23",
    //         secondary: "#404143"
    //     }
    // },

    HeadlightRestoration: {
        badge: "Service Details",

        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we provide professional headlight restoration to improve clarity, visibility, and the overall appearance of your vehicle. Using advanced restoration techniques and premium polishing compounds, we remove oxidation, yellowing, and surface damage to restore your headlights to like-new condition, ensuring safer night driving and a refreshed look.",
            features: [
                "Removal of oxidation, yellowing, and haze buildup",
                "Correction of surface scratches and dullness",
                "Advanced multi-stage sanding and polishing process",
                "Restoration of brightness and optical clarity"
            ],
            outro: "Our team carefully cleans, sands, and polishes the lenses, finishing with a protective coating to maintain clarity and durability for years to come.",

            includedTitle: "What is included?",
            includedIntro: "Our headlight restoration service includes:",
            includedItems: [
                "Thorough inspection and assessment of headlight condition",
                "Deep cleaning and oxidation removal",
                "Multi-stage sanding and polishing process",
                "Application of UV-protective sealant or coating",
                "Post-service care advice and maintenance tips"
            ],
            includedOutro: "We focus on precision, quality, and customer satisfaction in every restoration project."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "We follow a simple, structured workflow to ensure every headlight restoration service is precise, efficient, and delivers long-lasting results.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule your appointment and allow our technicians to inspect your headlights and determine the restoration needs."
                },
                {
                    id: "02",
                    title: "Surface Preparation",
                    description: "We clean the lenses thoroughly and prepare the surface by removing oxidation and damaged layers."
                },
                {
                    id: "03",
                    title: "Restoration & Polishing",
                    description: "Multi-stage sanding and polishing restores clarity, smoothness, and brightness."
                },
                {
                    id: "04",
                    title: "Protection & Final Check",
                    description: "We apply a UV-protective coating and perform quality checks to ensure long-lasting results."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for headlight restoration gives you:",
            items: [
                "Improved night-time visibility and driving safety",
                "Removal of yellowing, haze, and surface scratches",
                "Enhanced vehicle appearance and resale value",
                "Protection against future UV damage and oxidation",
                "Cost-effective alternative to headlight replacement"
            ],
            outro: "We prioritize precision, reliability, and long-lasting results for every customer.",
            image: "Headlight Restoration-a.png",
            imageAlt: "Headlight restoration service process"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Headlight Restoration"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Book Today"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },
    HeadlightCrackRepair: {
        badge: "Service Details",

        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we offer expert headlight crack repair to restore structural integrity and prevent further damage. Using professional-grade repair materials and precision techniques, we repair cracks and minor splits to maintain safety, performance, and the appearance of your headlights.",
            features: [
                "Repair of cracks and minor splits in headlight lenses",
                "Sealing and reinforcement to prevent moisture and dirt entry",
                "Restoration of structural integrity and strength",
                "Polishing and blending for a smooth, visually appealing finish"
            ],
            outro: "Our technicians carefully seal and reinforce damaged areas to ensure a durable, weather-resistant finish that protects your lighting system.",

            includedTitle: "What is included?",
            includedIntro: "Our headlight crack repair service includes:",
            includedItems: [
                "Detailed inspection of cracks and damage severity",
                "Cleaning and preparation of the damaged area",
                "Professional crack sealing and structural repair",
                "Polishing and blending for a smooth finish",
                "Final inspection and care recommendations"
            ],
            includedOutro: "We ensure each repair meets high-quality standards and safety requirements."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "We follow a structured process to repair headlight cracks efficiently, ensuring durability, safety, and aesthetic quality.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule an appointment and allow our technicians to inspect cracks and assess damage severity."
                },
                {
                    id: "02",
                    title: "Preparation",
                    description: "Clean and prepare the damaged area to ensure a proper bond and finish."
                },
                {
                    id: "03",
                    title: "Crack Repair & Sealing",
                    description: "Apply professional-grade repair materials and techniques to seal and reinforce the cracks."
                },
                {
                    id: "04",
                    title: "Polishing & Final Check",
                    description: "Blend the repaired area for a smooth finish and conduct a final inspection to guarantee quality and safety."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for headlight crack repair gives you:",
            items: [
                "Prevention of moisture and dirt entering the headlight unit",
                "Improved structural strength and durability",
                "Maintained lighting performance and road safety",
                "Enhanced visual appearance of the headlights",
                "Cost-effective solution compared to full replacement"
            ],
            outro: "We deliver reliable repairs designed to last.",
            image: "Crack-a .jpeg",
            imageAlt: "Headlight crack repair process"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Headlight Crack Repair"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Book Today"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },
    HeadlightCondensationRepair: {
        badge: "Service Details",

        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we provide professional headlight condensation repair to eliminate internal moisture and restore clear lighting performance. Using specialized drying, sealing, and ventilation techniques, we prevent fogging and water buildup that can reduce visibility and damage electrical components.",
            features: [
                "Elimination of internal moisture and fogging",
                "Repair or replacement of faulty seals and vents",
                "Drying and ventilation for long-lasting clarity",
                "Protection of bulbs, wiring, and electronic components"
            ],
            outro: "Our process ensures your headlights remain clear, dry, and fully functional in all weather conditions.",

            includedTitle: "What is included?",
            includedIntro: "Our headlight condensation repair service includes:",
            includedItems: [
                "Inspection to identify moisture source and seal issues",
                "Drying and moisture removal from the headlight unit",
                "Repair or replacement of faulty seals and vents",
                "Reassembly and leak testing for long-term protection",
                "Maintenance guidance to prevent future condensation"
            ],
            includedOutro: "We focus on thorough repairs and long-lasting solutions."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "We follow a structured process to remove condensation efficiently and ensure long-lasting clear headlights.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule your appointment and allow our technicians to inspect moisture sources and check seals."
                },
                {
                    id: "02",
                    title: "Drying & Moisture Removal",
                    description: "Use specialized equipment and techniques to remove all internal moisture from the headlight unit."
                },
                {
                    id: "03",
                    title: "Seal Repair or Replacement",
                    description: "Repair or replace faulty seals and vents to prevent future condensation."
                },
                {
                    id: "04",
                    title: "Reassembly & Testing",
                    description: "Reassemble the headlight, perform leak testing, and ensure proper functionality and clarity."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for headlight condensation repair gives you:",
            items: [
                "Clear headlights with no fogging or moisture buildup",
                "Protection of bulbs, wiring, and electronic components",
                "Improved visibility and driving safety",
                "Extended lifespan of the headlight assembly",
                "Reliable performance in all weather conditions"
            ],
            outro: "We prioritize durability, safety, and customer satisfaction.",
            image: "Condensation-a.png",
            imageAlt: "Headlight condensation repair process"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Headlight Condensation Repair"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Book Your Repair Today"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },
    HeadlightLensReplacement: {
        badge: "Service Details",

        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we offer professional headlight lens replacement to restore clarity, safety, and appearance when lenses are severely damaged or beyond repair. Using high-quality replacement lenses and precision fitting techniques, we ensure a perfect fit and factory-standard finish.",
            features: [
                "Replacement of severely damaged or worn headlight lenses",
                "Precision fitting for optimal lighting performance",
                "Restoration of clarity and vehicle aesthetics",
                "Use of high-quality, durable lens materials"
            ],
            outro: "Our technicians handle the entire process with care to ensure optimal lighting performance and durability.",

            includedTitle: "What is included?",
            includedIntro: "Our headlight lens replacement service includes:",
            includedItems: [
                "Assessment of lens damage and replacement requirements",
                "Removal of damaged or worn headlight lenses",
                "Installation of high-quality replacement lenses",
                "Sealing and alignment for optimal performance",
                "Final testing and aftercare support"
            ],
            includedOutro: "We ensure every replacement meets safety and quality standards."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "We follow a structured process to replace headlight lenses efficiently, ensuring perfect fit, clarity, and long-lasting performance.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule your appointment and allow our technicians to assess the damage and replacement needs."
                },
                {
                    id: "02",
                    title: "Lens Removal",
                    description: "Carefully remove the damaged or worn headlight lenses without affecting other components."
                },
                {
                    id: "03",
                    title: "Replacement Installation",
                    description: "Install high-quality replacement lenses with precision alignment and secure sealing."
                },
                {
                    id: "04",
                    title: "Testing & Final Check",
                    description: "Perform functional tests and final inspections to ensure clarity, safety, and perfect fit."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for headlight lens replacement gives you:",
            items: [
                "Crystal-clear headlights for maximum visibility",
                "Restored factory look and premium appearance",
                "Improved safety for night and low-light driving",
                "Durable, long-lasting lens materials",
                "Professional installation with guaranteed fit and finish"
            ],
            outro: "We deliver precision workmanship and reliable results every time.",
            image: "Crack1-a .jpeg",
            imageAlt: "Headlight lens replacement process"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Headlight Lens Replacement"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Book Your Replacement Today"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },
    ExteriorEnhancementServices: {
        badge: "Service Details",

        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we specialise in exterior styling enhancements designed to upgrade your vehicle’s visual impact and individuality. From aggressive body kits and aerodynamic spoilers to precision-fitted lip kits and styling components, we help turn standard vehicles into standout builds. Using premium parts and expert installation techniques, every upgrade is fitted with accuracy and attention to detail - ensuring perfect alignment, durability, and a factory-quality finish.",
            features: [
                "Body kit installation for enhanced styling and presence",
                "Front splitter and lip kit fitting for sportier aesthetics",
                "Rear spoilers and aerodynamic upgrades",
                "Side skirt and exterior styling enhancements",
                "Professional fitting with precision alignment and finishing"
            ],
            outro: "Whether you want a subtle enhancement or a full styling transformation, our team delivers exterior upgrades that elevate both appearance and road presence.",

            includedTitle: "What is included?",
            includedIntro: "Our exterior enhancement services include:",
            includedItems: [
                "Vehicle inspection and styling consultation to understand your vision",
                "Professional installation of body kits, spoilers, and lip kits",
                "Precision alignment and secure fitting of all exterior components",
                "Finishing adjustments to ensure seamless integration with the vehicle design",
                "Final inspection and aftercare guidance for long-lasting results"
            ],
            includedOutro: "We ensure every modification complements your vehicle while maintaining quality and durability."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "We follow a structured installation process to ensure every exterior upgrade achieves a premium, factory-quality finish.",
            steps: [
                {
                    id: "01",
                    title: " Consultation & Assessment",
                    description: "We assess your vehicle and discuss styling goals, parts selection, and desired finish."
                },
                {
                    id: "02",
                    title: "Preparation",
                    description: "Vehicle surfaces are prepared and measured to ensure accurate installation."
                },
                {
                    id: "03",
                    title: " Installation & Styling",
                    description: "Body kits, spoilers, and lip kits are professionally fitted with precision workmanship."
                },
                {
                    id: "04",
                    title: "Final Finishing",
                    description: "Alignment checks, detailing, and quality control ensure a flawless final result."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for exterior enhancement services gives you:",
            items: [
                "Aggressive, customised styling that stands out on the road",
                "Improved aerodynamics and sport-inspired appearance",
                "Enhanced vehicle individuality and visual presence",
                "Professional installation ensuring secure, long-lasting fitment",
                "Premium-quality finish designed to complement your vehicle perfectly"
            ],
            outro: "We focus on precision, craftsmanship, and high-quality styling upgrades in every project.",
            image: "extirior-a.jpg",
            imageAlt: "Exterior enhancement detailing service"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Exterior Enhancement Services"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Book Today"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },
    InteriorTrimsRestoration: {
        badge: "Service Details",
        aboutService: {
            title: "About this Service",
            intro: "Interior trims can fade, scratch, or wear over time—making your vehicle look older than it is. At Tomas Exterior, we restore and wrap interior trims to bring back a clean, premium finish without the cost of replacement.",
            features: [
                "Scratched or faded interior trims",
                "Upgrading interior style and colour",
                "Modern wrap finishes (clean, premium look)",
                "Refreshing your vehicle’s interior appearance"
            ],
            outro: "We combine precision, premium materials, and professional workmanship to give your interior trims a refreshed, high-quality look.",
            includedTitle: "What’s Included?",
            includedIntro: "Our Interior Trims Restoration / Wrapping service includes:",
            includedItems: [
                "Trim inspection and material check",
                "Surface cleaning and preparation",
                "Restoration or wrapping (based on condition)",
                "Precision finishing and alignment",
                "Final checks and care guidance"
            ],
            includedOutro: "We ensure every detail is carefully handled to maintain a flawless, long-lasting finish."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "Our process is simple, structured, and designed to give your interior trims a flawless, professional finish.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Trim Assessment",
                    description: "Schedule an appointment and let our experts inspect your interior trims to recommend the best restoration or wrapping solution."
                },
                {
                    id: "02",
                    title: "Surface Prep and Planning",
                    description: "We clean, prep, and plan the work process for smooth restoration or wrap installation."
                },
                {
                    id: "03",
                    title: "Restore or Wrap Installation",
                    description: "Our team carefully restores worn trims or applies high-quality wraps to achieve a premium, modern finish."
                },
                {
                    id: "04",
                    title: "Final Detailing and Completion",
                    description: "We perform final checks, alignments, and provide guidance to maintain your refreshed interior trims."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for interior trims restoration and wrapping provides:",
            items: [
                "Fresh interior look without replacing parts",
                "Premium modern finish",
                "Durable and clean results",
                "Custom style options",
                "Professional workmanship"
            ],
            outro: "We prioritize quality, precision, and attention to detail to enhance your vehicle’s interior aesthetics.",
            image: "interior.jpeg",
            imageAlt: "Interior trims restoration and wrapping work"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Interior Trim Restoration",
                        "Interior Trim Wrapping"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Get a Quote via WhatsApp"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },

    IntelligentAmbientLightInstallation: {
        badge: "Service Details",
        aboutService: {
            title: "About this Service",
            intro: "Our intelligent ambient lighting installation service is designed for customers who want a more premium and modern look. We install lighting solutions with a clean finish, ensuring safe wiring and a professional result that enhances the overall experience.",
            features: [
                "Creating a premium interior feel",
                "Improved visibility and comfort at night",
                "Customisable lighting options",
                "Clean, professional finishing"
            ],
            outro: "We provide precise, professional installation and attention to detail for a stylish and safe interior lighting upgrade.",
            includedTitle: "What’s Included?",
            includedIntro: "Our Intelligent Ambient Light Installation service includes:",
            includedItems: [
                "Consultation and lighting plan",
                "Selection of lighting setup and placement",
                "Professional wiring and secure fitting",
                "Testing and final adjustments",
                "Aftercare support and usage guidance"
            ],
            includedOutro: "We ensure every installation is safe, functional, and visually stunning."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "Our process is designed to provide a safe, clean, and professional installation while enhancing your interior style.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule an appointment and let our experts assess your interior to plan the ambient lighting installation."
                },
                {
                    id: "02",
                    title: "Installation Planning",
                    description: "We plan wiring, placement, and lighting configuration for a smooth and efficient workflow."
                },
                {
                    id: "03",
                    title: "Install & Configure",
                    description: "Our team performs professional wiring and installs the lighting system according to the planned design."
                },
                {
                    id: "04",
                    title: "Final Testing and Completion",
                    description: "We conduct final checks, test all lighting setups, and provide guidance for usage and maintenance."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for ambient light installation provides:",
            items: [
                "Premium modern appearance",
                "Safe and professional wiring",
                "Customisable lighting setup",
                "Better comfort and interior feel",
                "Clean finishing with attention to detail"
            ],
            outro: "We prioritize safety, precision, and aesthetics to create a lighting experience that elevates your vehicle’s interior.",
            image: "ambient1.jpeg",
            imageAlt: "Intelligent ambient light installation"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Ambient Light Installation"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Get a Quote via WhatsApp"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },
    BuildingWindowTinting: {
        badge: "Service Details",
        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we provide high-quality building window tinting solutions designed to improve privacy and comfort while maintaining a bright, modern look. Whether you need tinting for your home, office, terrace, or a custom project, we deliver results that look great and perform even better.",
            features: [
                "Increased privacy without blocking natural light",
                "Reduced glare for screens and living spaces",
                "UV protection to prevent fading and damage",
                "Heat reduction for improved indoor comfort",
                "A sleek, modern appearance"
            ],
            outro: "Our team ensures a precise, clean, and long-lasting finish for every building window tinting project.",
            includedTitle: "What’s Included?",
            includedIntro: "Our building window tinting service includes:",
            includedItems: [
                "Site assessment & consultation",
                "Film recommendation based on privacy and lighting needs",
                "Professional measurement and preparation",
                "Precision installation with clean edges and no bubbling",
                "Aftercare guidance for long-lasting performance"
            ],
            includedOutro: "We make sure every detail is handled professionally for optimal results."
        },

        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "Our step-by-step process ensures a hassle-free experience and high-quality results for building window tinting.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule a consultation and let our team assess your site and requirements."
                },
                {
                    id: "02",
                    title: "Film Selection & Planning",
                    description: "We recommend the best film type and plan the installation for your space."
                },
                {
                    id: "03",
                    title: "Installation & Finishing",
                    description: "Our experts install the film with precision, ensuring clean edges and no bubbles."
                },
                {
                    id: "04",
                    title: "Final Quality Check & Handover",
                    description: "We perform final inspections and provide guidance to maintain your window tinting."
                }
            ]
        },

        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for building window tinting provides:",
            items: [
                "Improved privacy and comfort",
                "Reduced glare and heat",
                "UV protection for interiors",
                "Premium clean finish",
                "Long-lasting results with quality materials"
            ],
            outro: "We prioritize precision, aesthetics, and customer satisfaction for every project.",
            image: "building-a.jpeg",
            imageAlt: "Building window tinting service"
        },

        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Building Window Tinting"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Get a Quote via WhatsApp"
        },

        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    }
};

