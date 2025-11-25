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
          description: "Sample of work done with and for people",
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
            },},{id: "projects-vlm-scoping",
          title: 'VLM Scoping',
          description: "Professional experience designing inference pipeline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_vlmscoping/";
            },},{id: "projects-freespace-detection-optimization",
          title: 'Freespace detection optimization',
          description: "Enabled new methods for navigation with 3x speedup",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_freespace/";
            },},{id: "projects-maintenance-automation",
          title: 'Maintenance Automation',
          description: "Reduce site visits with satellite CV",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_maintenance_automation/";
            },},{id: "projects-demand-estimation",
          title: 'Demand Estimation',
          description: "Rollout on gigabytes of image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_demand_estimation/";
            },},{id: "projects-price-prediction-api",
          title: 'Price Prediction API',
          description: "Using ML for automated price estimation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_price_api/";
            },},{id: "projects-settlement-detection",
          title: 'Settlement Detection',
          description: "Rollout on country wide dataset",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_settlement_detection/";
            },},{id: "projects-table-robot",
          title: 'Table robot',
          description: "Making an autonomous table from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_table_robot/";
            },},{id: "projects-leetcode-backend-service",
          title: 'Leetcode backend service',
          description: "Sends problems daily to Recurse Center&#39;s Zulip client.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_leetcodebot/";
            },},{id: "projects-e-commerce-website",
          title: 'E-commerce website',
          description: "Revenue-generating website",
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
