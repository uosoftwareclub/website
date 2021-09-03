---
title: Contributing to UOSC stories
author: wuon, UOSC
date: 2021-08-07
hero: ./images/book.jpg
excerpt: Hello :) Daniel from the front-end team here! Today I will be outlining how anyone can write a story for uosc.
---

Hello :) Daniel from the front-end team here! Today I will be outlining how anyone can write a story for UOSC.

### Setting up the space

To keep things consistent, we would like for you to create a new branch using the format `s/YYYY-MM-DD-title`. For example, the branch for this story will be `s/2021-08-07-contributing-to-uosc-stories`

```bash
git checkout -b s/2021-08-07-contributing-to-uosc-stories
```

For those that are curious, the "s" stands for stories, and we name our branches like this at UOSC so we can keep things organized for future reference.

In bigger organizations, some teams and certain repositories may follow strict guidelines to keep things organized with 100s of developers.

---

### Adding yourself as an author

Before creating a story, we have to first add yourself as an author! To do this we need to create a yml file to `/content/authors` from the root directory. Use the format `<username>.yml`. Luckily we have a nifty command to do this for us:

```bash
npm run generate author
```

After providing your full name and username, you can find the created file in `/content/authors`. Also, feel free to add a profile picture and place it in the `/content/authors/avatars` folder. It should look something like the example shown below.

```
name: Lorem Ipsum
username: loremipsum
bio: |
  Short description about you :)
avatar: ./avatars/loremipsum.jpg
social:
  - url: https://github.com
  - url: https://www.linkedin.com
```

Additionally, you can add your supporting socials. We currently support the following:

- Github
- LinkedIn
- Twitter
- Facebook
- Instagram

Want to suggest more socials? Feel free to let us know at uosoftwareclub@gmail.com

Feel free to take a look at some authors [here](https://github.com/uosoftwareclub/website/tree/master/content/authors).

### Generating a story template

In this section, we are going to outline how you can utilize the proper format to generate a story. Since we use `gatsby.js` there are some custom metadata options we need to add that look something like this:

```
---
title: Contributing to UOSC stories
author: Daniel Wu, UOSC
date: 2021-07-25
hero: ./images/book.jpg
excerpt: Today I will be outlining how anyone can write a story for uosc
---
```

Fortunately, our front-end team have crafted an easy generator for us to use!

```bash
npm run generate story
```

After providing the author's username (which we created above!), date, and title, we should find a new created folder with the format `YYYY-MM-DD-<title>` in `content/posts`.

Within that folder you will find a file `index.md` which is where you will write your story! Additionally, if you would like to add photos, simply create an images folder in the same level as `index.md`.

Feel free to take a look at some published stories [here](https://github.com/uosoftwareclub/website/tree/master/content/posts).

---

### Publishing your story

Awesome, we are super excited to host your story on UOSC :) Simply commit your changes and push your branch with the message including a `story` prefix like shown below:

```bash
git commit -m "story: contributing to uosc stories"
git push -u origin s/2021-08-07-contributing-to-uosc-stories
```

Off to Github it goes! Now all you have to do is wait for a PR review from one of our members and once merged in, it will automatically be deployed!

---

### FAQ

#### My story isn't showing up in /stories

The `.cache` is probably interfering with gatsby rebuilding. Try running the following commands:

```bash
npm run clean
npm run dev
```

The story should now (hopefully) show up!
