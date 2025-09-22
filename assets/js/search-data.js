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
          description: "Collaborations with and for other people.",
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
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2022-10-28-lidar-map/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
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
      },{id: "post-pingpong-bot",
        
          title: "Pingpong Bot",
        
        description: "Pingpong Bot",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pingpong-bot/";
          
        },
      },{id: "post-python-and-arduino-via-smartphones",
        
          title: "Python and Arduino via Smartphones",
        
        description: "Python and Arduino via Smartphones",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/android-arduino/";
          
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
      },{id: "post-remote-control-car",
        
          title: "Remote-control Car",
        
        description: "Remote controlling a toy car over WIFI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/rc-car/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/autonomy-from-scratch/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-tool-calling-with-mcp",
          title: 'Tool calling with MCP',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-model-regression-testing",
          title: 'Model regression testing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-vlaops-blogpost",
          title: 'VLAOps blogpost',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-vlm-scoping",
          title: 'VLM Scoping',
          description: "Professional experience designing inference pipeline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_vlmscoping/";
            },},{id: "projects-satellite-prediction",
          title: 'Satellite prediction',
          description: "Rollout on country wide dataset",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_satellite/";
            },},{id: "projects-table-robot",
          title: 'Table robot',
          description: "Making an autonomous table from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_table_robot/";
            },},{id: "projects-e-commerce-website",
          title: 'E-commerce website',
          description: "Revenue-generating website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_flower_website/";
            },},{id: "projects-freespace-detection-optimization",
          title: 'Freespace detection optimization',
          description: "Enabled new methods for navigation with 3x speedup",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_freespace/";
            },},{id: "projects-leetcode-backend-service",
          title: 'Leetcode backend service',
          description: "Sends problems daily to Recurse Center&#39;s Zulip client.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_leetcodebot/";
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
