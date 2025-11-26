// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-portfolio",
          title: "portfolio",
          description: "Sample of work done under professional and personal contexts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "code",
          description: "Open source code repositories I contribute to in my free time.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-connect-ir-sensor-to-ros2",
        
          title: "Connect IR Sensor to ROS2",
        
        description: "Connect IR Sensor to ROS2",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ir-sensor-ros2/";
          
        },
      },{id: "post-conversation-prompts-app",
        
          title: "Conversation Prompts App",
        
        description: "Conversation Prompts App",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/conversation-prompts-app/";
          
        },
      },{id: "post-simulate-robot-navigation-inside-docker",
        
          title: "Simulate robot navigation inside Docker",
        
        description: "Simulate robot navigation inside Docker",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/nav2-docker/";
          
        },
      },{id: "post-python-and-arduino-via-smartphones",
        
          title: "Python and Arduino via Smartphones",
        
        description: "Python and Arduino via Smartphones",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/android-arduino/";
          
        },
      },{id: "post-vegvisir-2d-map-from-lidar",
        
          title: "Vegvisir - 2D Map from LiDAR",
        
        description: "2D maps just from LIDAR",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/lidar-map/";
          
        },
      },{id: "post-the-psycellium",
        
          title: "The Psycellium",
        
        description: "The Psycellium",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/psycellium/";
          
        },
      },{id: "post-album-recommendation-using-cosine-similarity",
        
          title: "Album Recommendation using Cosine Similarity",
        
        description: "Album Recommendation using Cosine Similarity",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/albums/";
          
        },
      },{id: "post-pingpong-bot",
        
          title: "Pingpong Bot",
        
        description: "Pingpong Bot",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/pingpong-bot/";
          
        },
      },{id: "post-remote-control-car",
        
          title: "Remote-control Car",
        
        description: "Remote controlling a toy car over WIFI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/rc-car/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-return",
          title: 'Return',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-vision-language-action-models-in-production",
          title: 'Vision Language Action Models in Production',
          description: "Wrote delivery plan from research prototypes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_vlmscoping/";
            },},{id: "projects-navigating-uncertainty-with-computer-vision",
          title: 'Navigating Uncertainty with Computer Vision',
          description: "Enabled new methods for navigation with 3x faster image throughput",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_freespace/";
            },},{id: "projects-asset-inspection-saves-lives",
          title: 'Asset Inspection Saves Lives',
          description: "Deployed backend service to prevent dangerous site visits",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_maintenance_automation/";
            },},{id: "projects-find-customers-without-years-of-data-collection",
          title: 'Find customers without years of data collection',
          description: "Estimate customer demand from satellite image based computer vision AI model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_demand_estimation/";
            },},{id: "projects-faster-apartment-deals-with-ml",
          title: 'Faster apartment deals with ML',
          description: "Deployed ML backend services for instantaneous price estimates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_price_api/";
            },},{id: "projects-direct-foreign-aid-faster-with-ai",
          title: 'Direct foreign aid faster with AI',
          description: "Deployed computer vision model on whole country to find vulnerable locations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_settlement_detection/";
            },},{id: "projects-building-a-robot-from-scratch",
          title: 'Building a robot from scratch',
          description: "Programmed, sourced parts, wired electronics. It&#39;s alive! 🧟‍♂️",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_table_robot/";
            },},{id: "projects-leetcode-as-a-service",
          title: 'Leetcode-as-a-Service',
          description: "Deployed service sending Leetcode problems daily to Recurse Center&#39;s Zulip client.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_leetcodebot/";
            },},{id: "projects-selling-flowers-online",
          title: 'Selling flowers online',
          description: "Deployed an e-commerce website that generated 52x RoI 🤯",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_flower_website/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
