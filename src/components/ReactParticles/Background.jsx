// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Background = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);
//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         autoPlay: true,
//         background: {
//           image:
//             "https://cdn.pixabay.com/photo/2015/07/08/07/41/tree-835455_640.jpg",
//           position: "center",
//           repeat: "",
//           size: "",
//           opacity: 1,
//         },
//         backgroundMask: {
//           composite: "destination-out",
//           cover: {
//             color: {
//               value: "#fff",
//             },
//             opacity: 1,
//           },
//           enable: false,
//         },
//         defaultThemes: {},
//         delay: 0,
//         fullScreen: {
//           enable: false,
//           zIndex: -1,
//         },
//         detectRetina: true,
//         duration: 0,
//         fpsLimit: 120,
//         interactivity: {
//           detectsOn: "window",
//           events: {
//             onClick: {
//               enable: false,
//               mode: [],
//             },
//             onDiv: {
//               selectors: [],
//               enable: false,
//               mode: [],
//               type: "circle",
//             },
//             onHover: {
//               enable: true,
//               mode: "trail",
//               parallax: {
//                 enable: false,
//                 force: 2,
//                 smooth: 10,
//               },
//             },
//             resize: {
//               delay: 0.5,
//               enable: true,
//             },
//           },
//           modes: {
//             attract: {
//               distance: 200,
//               duration: 0.4,
//               easing: "ease-out-quad",
//               factor: 1,
//               maxSpeed: 50,
//               speed: 1,
//             },
//             bounce: {
//               distance: 200,
//             },
//             bubble: {
//               distance: 200,
//               duration: 0.4,
//               mix: false,
//               divs: {
//                 distance: 200,
//                 duration: 0.4,
//                 mix: false,
//                 selectors: [],
//               },
//             },
//             connect: {
//               distance: 80,
//               links: {
//                 opacity: 0.5,
//               },
//               radius: 60,
//             },
//             grab: {
//               distance: 100,
//               links: {
//                 blink: false,
//                 consent: false,
//                 opacity: 1,
//               },
//             },
//             push: {
//               default: true,
//               groups: [],
//               quantity: 4,
//             },
//             remove: {
//               quantity: 2,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//               factor: 100,
//               speed: 1,
//               maxSpeed: 50,
//               easing: "ease-out-quad",
//               divs: {
//                 distance: 200,
//                 duration: 0.4,
//                 factor: 100,
//                 speed: 1,
//                 maxSpeed: 50,
//                 easing: "ease-out-quad",
//                 selectors: [],
//               },
//             },
//             slow: {
//               factor: 3,
//               radius: 200,
//             },
//             trail: {
//               delay: 0.005,
//               pauseOnStop: true,
//               quantity: 5,
//               particles: {
//                 color: {
//                   value: "#ff0000",
//                   animation: {
//                     enable: true,
//                     speed: 400,
//                     sync: true,
//                   },
//                 },
//                 collisions: {
//                   enable: false,
//                 },
//                 links: {
//                   enable: false,
//                 },
//                 move: {
//                   outModes: {
//                     default: "destroy",
//                   },
//                   speed: 2,
//                 },
//                 size: {
//                   value: 5,
//                   animation: {
//                     enable: true,
//                     speed: 5,
//                     minimumValue: 1,
//                     sync: true,
//                     startValue: "min",
//                     destroy: "max",
//                   },
//                 },
//               },
//             },
//             light: {
//               area: {
//                 gradient: {
//                   start: {
//                     value: "#ffffff",
//                   },
//                   stop: {
//                     value: "#000000",
//                   },
//                 },
//                 radius: 1000,
//               },
//               shadow: {
//                 color: {
//                   value: "#000000",
//                 },
//                 length: 2000,
//               },
//             },
//           },
//         },
//         manualParticles: [],
//         particles: {
//           bounce: {
//             horizontal: {
//               random: {
//                 enable: false,
//                 minimumValue: 0.1,
//               },
//               value: 1,
//             },
//             vertical: {
//               random: {
//                 enable: false,
//                 minimumValue: 0.1,
//               },
//               value: 1,
//             },
//           },
//           collisions: {
//             absorb: {
//               speed: 2,
//             },
//             bounce: {
//               horizontal: {
//                 random: {
//                   enable: false,
//                   minimumValue: 0.1,
//                 },
//                 value: 1,
//               },
//               vertical: {
//                 random: {
//                   enable: false,
//                   minimumValue: 0.1,
//                 },
//                 value: 1,
//               },
//             },
//             enable: false,
//             maxSpeed: 50,
//             mode: "bounce",
//             overlap: {
//               enable: true,
//               retries: 0,
//             },
//           },
//           color: {
//             value: "#ff0000",
//             animation: {
//               h: {
//                 count: 0,
//                 enable: true,
//                 offset: 0,
//                 speed: 50,
//                 delay: 0,
//                 decay: 0,
//                 sync: false,
//               },
//               s: {
//                 count: 0,
//                 enable: false,
//                 offset: 0,
//                 speed: 1,
//                 delay: 0,
//                 decay: 0,
//                 sync: true,
//               },
//               l: {
//                 count: 0,
//                 enable: false,
//                 offset: 0,
//                 speed: 1,
//                 delay: 0,
//                 decay: 0,
//                 sync: true,
//               },
//             },
//           },
//           groups: {},
//           move: {
//             angle: {
//               offset: 0,
//               value: 90,
//             },
//             attract: {
//               distance: 200,
//               enable: false,
//               rotate: {
//                 x: 3000,
//                 y: 3000,
//               },
//             },
//             center: {
//               x: 50,
//               y: 50,
//               mode: "percent",
//               radius: 0,
//             },
//             decay: 0,
//             distance: {},
//             direction: "none",
//             drift: 0,
//             enable: true,
//             gravity: {
//               acceleration: 9.81,
//               enable: false,
//               inverse: false,
//               maxSpeed: 50,
//             },
//             path: {
//               clamp: true,
//               delay: {
//                 random: {
//                   enable: false,
//                   minimumValue: 0,
//                 },
//                 value: 0,
//               },
//               enable: false,
//               options: {},
//             },
//             outModes: {
//               default: "out",
//               bottom: "out",
//               left: "out",
//               right: "out",
//               top: "out",
//             },
//             random: false,
//             size: false,
//             speed: 2,
//             spin: {
//               acceleration: 0,
//               enable: false,
//             },
//             straight: false,
//             trail: {
//               enable: false,
//               length: 10,
//               fill: {},
//             },
//             vibrate: false,
//             warp: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               width: 1920,
//               height: 1080,
//             },
//             limit: 0,
//             value: 100,
//           },
//           opacity: {
//             random: {
//               enable: true,
//               minimumValue: 0.3,
//             },
//             value: {
//               min: 0.3,
//               max: 0.8,
//             },
//             animation: {
//               count: 0,
//               enable: true,
//               speed: 0.5,
//               decay: 0,
//               delay: 0,
//               sync: false,
//               mode: "auto",
//               startValue: "random",
//               destroy: "none",
//               minimumValue: 0.3,
//             },
//           },
//           reduceDuplicates: false,
//           shadow: {
//             blur: 0,
//             color: {
//               value: "#000",
//             },
//             enable: false,
//             offset: {
//               x: 0,
//               y: 0,
//             },
//           },
//           shape: {
//             close: true,
//             fill: true,
//             options: {},
//             type: "triangle",
//           },
//           size: {
//             random: {
//               enable: true,
//               minimumValue: 1,
//             },
//             value: {
//               min: 1,
//               max: 3,
//             },
//             animation: {
//               count: 0,
//               enable: true,
//               speed: 3,
//               decay: 0,
//               delay: 0,
//               sync: false,
//               mode: "auto",
//               startValue: "random",
//               destroy: "none",
//               minimumValue: 1,
//             },
//           },
//           stroke: {
//             width: 0,
//           },
//           zIndex: {
//             random: {
//               enable: false,
//               minimumValue: 0,
//             },
//             value: 0,
//             opacityRate: 1,
//             sizeRate: 1,
//             velocityRate: 1,
//           },
//           life: {
//             count: 0,
//             delay: {
//               random: {
//                 enable: false,
//                 minimumValue: 0,
//               },
//               value: 0,
//               sync: false,
//             },
//             duration: {
//               random: {
//                 enable: false,
//                 minimumValue: 0.0001,
//               },
//               value: 0,
//               sync: false,
//             },
//           },
//           rotate: {
//             random: {
//               enable: false,
//               minimumValue: 0,
//             },
//             value: 0,
//             animation: {
//               enable: false,
//               speed: 0,
//               decay: 0,
//               sync: false,
//             },
//             direction: "clockwise",
//             path: false,
//           },
//           destroy: {
//             bounds: {},
//             mode: "none",
//             split: {
//               count: 1,
//               factor: {
//                 random: {
//                   enable: false,
//                   minimumValue: 0,
//                 },
//                 value: 3,
//               },
//               rate: {
//                 random: {
//                   enable: false,
//                   minimumValue: 0,
//                 },
//                 value: {
//                   min: 4,
//                   max: 9,
//                 },
//               },
//               sizeOffset: true,
//               particles: {},
//             },
//           },
//           roll: {
//             darken: {
//               enable: false,
//               value: 0,
//             },
//             enable: false,
//             enlighten: {
//               enable: false,
//               value: 0,
//             },
//             mode: "vertical",
//             speed: 25,
//           },
//           tilt: {
//             random: {
//               enable: false,
//               minimumValue: 0,
//             },
//             value: 0,
//             animation: {
//               enable: false,
//               speed: 0,
//               decay: 0,
//               sync: false,
//             },
//             direction: "clockwise",
//             enable: false,
//           },
//           twinkle: {
//             lines: {
//               enable: true,
//               frequency: 0.05,
//               opacity: 1,
//             },
//             particles: {
//               enable: true,
//               frequency: 0.05,
//               opacity: 1,
//             },
//           },
//           wobble: {
//             distance: 5,
//             enable: false,
//             speed: {
//               angle: 50,
//               move: 10,
//             },
//           },
//           orbit: {
//             animation: {
//               count: 0,
//               enable: true,
//               speed: 1,
//               decay: 1,
//               delay: 1,
//               sync: true,
//             },
//             enable: false,
//             opacity: 1,
//             rotation: {
//               random: {
//                 enable: false,
//                 minimumValue: 0,
//               },
//               value: 45,
//             },
//             width: 1,
//           },
//           links: {
//             blink: true,
//             color: {
//               value: "random",
//             },
//             consent: false,
//             distance: 100,
//             enable: true,
//             frequency: 1,
//             opacity: 1,
//             shadow: {
//               blur: 5,
//               color: {
//                 value: "#000",
//               },
//               enable: false,
//             },
//             triangles: {
//               enable: true,
//               frequency: 1,
//             },
//             width: 3,
//             warp: false,
//           },
//           repulse: {
//             random: {
//               enable: true,
//               minimumValue: 500,
//             },
//             value: 0,
//             enabled: true,
//             distance: 1,
//             duration: 1,
//             factor: 1,
//             speed: 1,
//           },
//         },
//         pauseOnBlur: true,
//         pauseOnOutsideViewport: true,
//         responsive: [],
//         smooth: false,
//         style: {},
//         themes: [],
//         zLayers: 100,
//         emitters: [],
//       }}

//       // options={
//       //     {
//       //         fpsLimit: 120,
//       //         interactivity: {
//       //             events: {
//       //                 onClick: {
//       //                     enable: true,
//       //                     mode: "push",
//       //                 },
//       //                 onHover: {
//       //                     enable: true,
//       //                     mode: "repulse",
//       //                 },
//       //                 resize: true,
//       //             },
//       //             modes: {
//       //                 push: {
//       //                     quantity: 4,
//       //                 },
//       //                 repulse: {
//       //                     distance: 200,
//       //                     duration: 0.4,
//       //                 },
//       //             },
//       //         },
//       //         particles: {
//       //             links: {
//       //                 color: "#ffffff",
//       //                 distance: 150,
//       //                 enable: true,
//       //                 opacity: 0.5,
//       //                 width: 2,
//       //             },
//       //             collisions: {
//       //                 enable: true,
//       //             },
//       //             move: {
//       //                 direction: "none",
//       //                 enable: true,
//       //                 outModes: {
//       //                     default: "bounce",
//       //                 },
//       //                 random: true,
//       //                 speed: 6,
//       //                 straight: true,
//       //             },
//       //             number: {
//       //                 density: {
//       //                     enable: true,
//       //                     area: 800,
//       //                 },
//       //                 value: 80,
//       //             },
//       //             opacity: {
//       //                 value: 0.5,
//       //             },
//       //             shape: {
//       //                 type: "triangle",
//       //             },
//       //             size: {
//       //                 value: { min: 1, max: 5 },
//       //             },
//       //         },
//       //         detectRetina: true,
//       //         fullScreen: {
//       //             enable: false,
//       //             zIndex: -1
//       //         },
//       //         smooth: false,
//       //     }}
//     />
//   );
// };
// export default Background;

// // "use client";

// // import { useCallback, useEffect, useState, memo } from "react";
// // import Particles from "react-tsparticles";
// // import { loadFull } from "tsparticles";

// // // Ultra-optimized background component with aggressive performance optimization
// // const Background = memo(() => {
// //   const [deviceTier, setDeviceTier] = useState("minimal");

// //   // Simple device detection on mount only
// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       // One-time check for device capability
// //       const detectDevice = () => {
// //         if (window.innerWidth < 1024) return "minimal";
// //         if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
// //           return "minimal";
// //         return "high";
// //       };

// //       setDeviceTier(detectDevice());
// //     }
// //   }, []);

// //   // Minimal initialization for particles
// //   const particlesInit = useCallback(async (engine) => {
// //     await loadFull(engine);
// //   }, []);

// //   // Static gradient background for most devices
// //   if (deviceTier === "minimal") {
// //     return (
// //       <div className="static-background">
// //         <style jsx>{`
// //           .static-background {
// //             position: absolute;
// //             top: 0;
// //             left: 0;
// //             width: 100%;
// //             height: 100%;
// //             background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
// //             z-index: -1;
// //           }
// //         `}</style>
// //       </div>
// //     );
// //   }

// //   // Ultra-minimal particles for high-end devices only
// //   const particleOptions = {
// //     fpsLimit: 30,
// //     particles: {
// //       number: { value: 15, density: { enable: true, value_area: 800 } },
// //       color: { value: "#ffffff" },
// //       shape: { type: "circle" },
// //       opacity: { value: 0.4, random: false },
// //       size: { value: 1, random: false },
// //       move: {
// //         enable: true,
// //         speed: 0.5,
// //         direction: "none",
// //         random: false,
// //         straight: false,
// //         outModes: { default: "out" },
// //       },
// //       links: {
// //         enable: true,
// //         distance: 150,
// //         color: "#ffffff",
// //         opacity: 0.2,
// //         width: 1,
// //       },
// //     },
// //     interactivity: {
// //       detectsOn: "canvas",
// //       events: {
// //         onHover: { enable: false },
// //         onClick: { enable: false },
// //         resize: true,
// //       },
// //     },
// //     detectRetina: false,
// //     background: {
// //       color: "#000",
// //       image: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
// //       position: "50% 50%",
// //       repeat: "no-repeat",
// //       size: "cover",
// //     },
// //   };

// //   return (
// //     <div className="particles-container">
// //       <Particles
// //         id="tsparticles"
// //         init={particlesInit}
// //         options={particleOptions}
// //       />
// //       <style jsx>{`
// //         .particles-container {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           z-index: -1;
// //           overflow: hidden;
// //           contain: strict;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // });

// // Background.displayName = "Background";
// // export default Background;

"use client";

// Ultra-simplified background component that works in all environments
const Background = () => {
  return (
    <div className="background-wrapper">
      <div className="static-background"></div>

      {/* We'll load particles dynamically only after component mounts */}
      <div id="particles-container"></div>

      <style jsx>{`
        .background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .static-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          z-index: -1;
        }

        #particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
      `}</style>

      {/* Load particles with a script tag to avoid SSR issues */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // Initialize particles only after everything is loaded
        window.addEventListener('load', function() {
          // Dynamically import the particles libraries
          const loadParticles = async () => {
            try {
              // Check if we're on a capable device
              const isMobile = window.innerWidth < 1024;
              const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
              
              if (isMobile || isLowEndDevice) {
                // Don't load particles on low-end devices
                return;
              }
              
              // Dynamically import the libraries
              const tsParticlesModule = await import('react-tsparticles');
              const tsParticles = tsParticlesModule.default || tsParticlesModule;
              
              const loadFullModule = await import('tsparticles');
              const loadFull = loadFullModule.loadFull;
              
              // Initialize particles
              const engine = tsParticles.engine || tsParticles;
              await loadFull(engine);
              
              // Load particles into the container
              await tsParticles.load('particles-container', {
                fpsLimit: 60,
                particles: {
                  number: { value: 30, density: { enable: true, value_area: 800 } },
                  color: { value: "#ffffff" },
                  shape: { type: "triangle" },
                  opacity: { 
                    value: 0.5, 
                    random: true,
                    anim: {
                      enable: true,
                      speed: 0.5,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: { 
                    value: 3, 
                    random: true,
                    anim: {
                      enable: true,
                      speed: 2,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                  },
                  links: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.3,
                    width: 1,
                  },
                },
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onHover: { 
                      enable: true,
                      mode: "grab" 
                    },
                    onClick: { 
                      enable: true,
                      mode: "push" 
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 140,
                      links: { opacity: 0.5 }
                    },
                    push: {
                      quantity: 4
                    }
                  }
                },
                detectRetina: true,
                background: {
                  color: "transparent",
                }
              });
            } catch (error) {
              console.error("Failed to load particles:", error);
            }
          };
          
          // Load particles with a slight delay to ensure page is fully rendered
          setTimeout(loadParticles, 500);
        });
      `,
        }}
      />
    </div>
  );
};

export default Background;
