<template>
  <b-container>
    <b-row>
      <b-col
        sm="12"
        md="10"
      >
        <main id="styleguide">
          <h1 class="my-5 font-serif">Poets.org Styleguide</h1>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="Buttons"
            >Buttons</h2>
            <b-button
              class="m-2"
              :variant="button.variant"
              :size="button.size"
              v-for="(button, index) in buttons"
              :key="index"
            >{{ button.size }} {{ button.variant }}</b-button>
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="Announcements"
            >Announcements</h2>
            <app-announcements
              :announcements="announcements"/>
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="PoetsDeck"
            >Poets Card Deck</h2>
            <CardDeck
              title="Poets"
              cardtype="Poet"
              :cards="poets"
              :link="poetsLink"
            />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="PoetsFeaturedDeck"
            >Poets Featured Deck</h2>
            <CardDeck
              :featured="true"
              title="Poets"
              cardtype="Poet"
              class="card-deck--poet--extended"
              :cards="poetsExtended"
              :link="featuredPoetsLink"
            />
          </section>

          <section class="styleguide-item trans-bg-eg">
            <h2
              class="styleguide__heading"
              id="PoetsFeaturedDeck"
            >Poets Featured Deck with background</h2>
            <CardDeck
              title="Poets"
              cardtype="Poet"
              class="card-deck--poet--extended"
              :cards="poetsExtended"
              :link="featuredPoetsLink"
            />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="EssayCardDeck"
            >Poem Card Deck</h2>
            <CardDeck
              title="Essays on Teaching Poetry"
              cardtype="EssayCard"
              :cards="essays"
              :link="essaysLink"
            />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="PoemCardDeck"
            >Poem Card Deck</h2>
            <CardDeck
              title="Poems"
              cardtype="PoemCard"
              :cards="poems"
              :link="poemsLink"
            />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="LessonPlanCardDeck"
            >Lesson Plan Card Deck</h2>
            <CardDeck
              title="Lesson Plans"
              cardtype="LessonPlanCard"
              cols="6"
              :cards="LessonPlans"
              :link="LessonPlansLink"
            />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="PrizeCardDeck"
            >Prize Deck</h2>
            <CardDeck
              title="Prizes"
              cardtype="PrizeCard"
              cols="4"
              :cards="PrizeCards"
              :link="PrizeLink"
            />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="Forms"
            >Forms</h2>
            <StyleguideForm />
          </section>

          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="Features"
            >Features</h2>
            <FeatureStack
              title="Features"
              :features="featureCards"
            />
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="TeachingCardDeck"
            >Teaching Intro</h2>
            <TeachingIntro
              :cards="teachingCards"
              :text="teachingText"
            />
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="calloutCard">
              Callout Card
            </h2>
            <callout-card
              variant="bold"
              :action="calloutAction"
              text="Inspired by the success of our popular syndicated series Poem-a-Day, we’re pleased to present Teach This Poem, winner of the 2018 Innovations in Reading Prize given by the National Book Foundation."/>
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="BookCardDeck"
            >Books</h2>
            <CardDeck
              title="Books"
              cardtype="BookCard"
              cols="3"
              :cards="bookCards"
              :link="bookLink"
            />
            <section class="styleguide-item">
              <h2
                class="styleguide__heading"
                id="signupBlock">Signup Block</h2>
              <signup-block
                class="w-50"
                title="Monthly Educator Newsletter"
                list="poem-a-day">
                Receive monthly updates on lesson plans and more!
              </signup-block>
            </section>
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="videoBlock">Video Block</h2>
            <video-block
              class="w-50"
              title="A Teacher’s Guide to Poets.org"
              youtube-id="Waw7d8evTfg"
              vimeo-id="182766909">With a special introduction by Education Ambassador Richard Blanco, this brief video guide for teachers highlights the many educational resources available on Poets.org.</video-block>
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="Programs">Programs</h2>
            <app-media-list
              title="Programs"
              :more-link="programsMoreLink"
              :programs="programs"/>
          </section>
          <section class="styleguide-item">
            <h2
              class="styleguide__heading"
              id="ResourceCard">Resource Card</h2>
            <resource-card
              style="width: 380px;"
              :title="resourceCard.title"
              :body="resourceCard.body"
              :file-link="resourceCard.fileLink"
              :img-src="resourceCard.imgSrc"/>
          </section>
        </main>
      </b-col>
      <b-col
        sm="12"
        md="2"
      >
        <aside class="styleguide__menu p-4">
          <b-nav
            class="border-left"
            vertical
            v-b-scrollspy
          >
            <b-nav-item
              v-for="(item, index) in menu"
              :key="index"
              :href="item.anchor"
            >{{ item.title }}</b-nav-item>
          </b-nav>
        </aside>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppAnnouncements from "~/components/AppAnnouncements";
import AppMediaList from "~/components/AppMediaList";
import PoemCard from "~/components/Poems/PoemCard";
import LessonPlanCard from "~/components/LessonPlanCard";
import Poet from "~/components/Libraries/Poet";
import CardDeck from "~/components/CardDeck";
import CalloutCard from "~/components/CalloutCard";
import StyleguideForm from "~/components/Form/StyleguideForm";
import FeatureStack from "~/components/FeatureStack";
import SignupBlock from "../components/SignupBlock";
import TeachingIntro from "~/components/TeachingIntro";
import VideoBlock from "~/components/VideoBlock";
import * as _ from "lodash";
import ResourceCard from "~/components/ResourceCard";

export default {
  head: {
    bodyAttrs: {
      class: "styleguide"
    }
  },
  layout: "minimal",
  components: {
    AppAnnouncements,
    AppMediaList,
    PoemCard,
    CardDeck,
    Poet,
    StyleguideForm,
    FeatureStack,
    TeachingIntro,
    CalloutCard,
    SignupBlock,
    LessonPlanCard,
    VideoBlock,
    ResourceCard
  },
  computed: {
    buttons() {
      const sizes = ["sm", "md", "lg"];
      const variants = [
        "default",
        "primary",
        "primary-dark",
        "secondary",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
        "outline-primary",
        "outline-primary-dark",
        "outline-secondary",
        "outline-secondary-dark",
        "outline-success",
        "outline-warning",
        "outline-danger",
        "outline-light",
        "outline-dark",
        "link"
      ];
      return _.flatMap(sizes, size => {
        return _.map(variants, variant => {
          return { size: size, variant: variant };
        });
      });
    },
    menu() {
      return [
        {
          title: "Buttons",
          anchor: "#Buttons"
        },
        {
          title: "Announcements",
          anchor: "#Announcements"
        },
        {
          title: "Poets",
          anchor: "#PoetsDeck"
        },
        {
          title: "Poets - Featured",
          anchor: "#PoetsFeaturedDeck"
        },
        {
          title: "Poems",
          anchor: "#PoemCardDeck"
        },
        {
          title: "Essays Deck",
          anchor: "#EssayCardDeck"
        },
        {
          title: "Lesson Plans",
          anchor: "#LessonPlanCardDeck"
        },
        {
          title: "Prize Card Deck",
          anchor: "#PrizeCardDeck"
        },
        {
          title: "Forms",
          anchor: "#Forms"
        },
        {
          title: "Features",
          anchor: "#Features"
        },
        {
          title: "Teaching",
          anchor: "#TeachingCardDeck"
        },
        {
          title: "Callout Card",
          anchor: "#calloutCard"
        },
        {
          title: "Books",
          anchor: "#BookCardDeck"
        },
        {
          title: "SignupBlock",
          anchor: "#signupBlock"
        },
        {
          title: "Video Block",
          anchor: "#videoBlock"
        },
        {
          title: "Programs",
          anchor: "#Programs"
        },

        {
          title: "Resource Card",
          anchor: "#ResourceCard"
        }
      ];
    }
  },
  data() {
    return {
      announcements: [
        {
          body: "A Letter from the Executive Director",
          date: "1533960000",
          link: "/blah"
        },
        {
          body:
            "The Academy of American Poets Is Pleased to Announce the Winners of the Golden Shovel Anthology International Student Poetry Competition",
          date: "1533960000",
          link: "/blah"
        },
        {
          body:
            "We’re excited to announce that we’ve invited twelve new guest editors to each curate a month of Poem-a-Day in 2018. The guest editor for August is Evie Shockley. Find out more about the program and the other guest editors.",
          date: "1533960000",
          link: "/blah"
        },
        {
          title: "You can't see me!"
        }
      ],
      featureCards: [
        {
          title: "Emily Skaja: Brute",
          subtitle: "2018 Walt Whiteman Award",
          text:
            "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper.",
          img: {
            src: "https://placekitten.com/g/500/400",
            alt: "Kitty cat says meow."
          },
          link: "blah/blah"
        },
        {
          title: "Mike 'Pirog' Pirog Wins again",
          subtitle: "2005 Best in Show",
          text:
            "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
          video: "https://www.youtube.com/watch?v=Pg_5Ni1_bg4",
          link: "blah/blah"
        },
        {
          title: "Donna Bungard",
          subtitle: "Protector of the Buns",
          text:
            "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper.",
          img: {
            src: "https://placekitten.com/g/400/450",
            alt: "Kitty cat says meow."
          },
          link: "blah/blah"
        }
      ],
      poems: [
        {
          title: "A Poem About a Thing",
          text: `There once was a man from Nantucket
Who kept all his cash in a bucket.
  But his daughter, named Nan,
  Ran away with a man
And as for the bucket, Nantucket.`,
          poet: {
            name: "Dustin LeKensrue"
          },
          year: "2018"
        },
        {
          title: "A Poem About a Thing",
          text: `There once was a man from Nantucket
Who kept all his cash in a bucket.
  But his daughter, named Nan,
  Ran away with a man
And as for the bucket, Nantucket.`,
          poet: {
            name: "Dustin LeKensrue"
          },
          year: "2018"
        },
        {
          title: "A Poem About a Thing",
          text: `There once was a man from Nantucket
Who kept all his cash in a bucket.
  But his daughter, named Nan,
  Ran away with a man
And as for the bucket, Nantucket.`,
          poet: {
            name: "Dustin LeKensrue"
          },
          year: "2018"
        }
      ],
      PrizeCards: [
        {
          title: "A Poem About a Thing",
          text: `There once was a man from Nantucket
Who kept all his cash in a bucket.
  But his daughter, named Nan,
  Ran away with a man
And as for the bucket, Nantucket.`,
          link: {
            href: "blah/blah"
          }
        },
        {
          title: "A Poem About a Thing",
          text: `There once was a man from Nantucket
Who kept all his cash in a bucket.
  But his daughter, named Nan,
  Ran away with a man
And as for the bucket, Nantucket.`,
          link: {
            href: "blah/blah"
          }
        },
        {
          title: "A Poem About a Thing",
          text: `There once was a man from Nantucket
Who kept all his cash in a bucket.
  But his daughter, named Nan,
  Ran away with a man
And as for the bucket, Nantucket.`,
          link: {
            href: "blah/blah"
          }
        }
      ],
      essays: [
        {
          title: "An Essay About a Thing",
          text:
            "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
          poet: {
            name: "Dustin LeKensrue"
          },
          year: "2018"
        },
        {
          title: "An Essay About a Thing",
          text:
            "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
          poet: {
            name: "Dustin LeKensrue"
          },
          year: "2018"
        },
        {
          title: "An Essay About a Thing",
          text:
            "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
          poet: {
            name: "Dustin LeKensrue"
          },
          year: "2018"
        }
      ],
      LessonPlans: [
        {
          title: "Teach this Poem: 'Mustard Flowers' by",
          meta: "Madeleine Fuchs Hoizer",
          level: "Grades 6-12"
        },
        {
          title: "Teach this Poem: 'Mustard Flowers' by",
          meta: "Madeleine Fuchs Hoizer",
          level: "Grades 6-12"
        },
        {
          title: "Teach this Poem: 'Mustard Flowers' by",
          meta: "Madeleine Fuchs Hoizer",
          level: "Grades 6-12"
        },
        {
          title: "Teach this Poem: 'Mustard Flowers' by",
          meta: "Madeleine Fuchs Hoizer",
          level: "Grades 6-12"
        }
      ],
      poets: [
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        }
      ],
      poetsExtended: [
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        },
        {
          name: "Dustin LeKensrue",
          bio: "Praesent commodo cursus magna, vel scelerisque nisl consect",
          img: {
            src: "/images/poet.png"
          },
          link: {
            href: "blah/blah"
          }
        }
      ],
      LessonPlansLink: {
        href: "blah/blah",
        text: "185 Lesson Plans"
      },
      bookLink: {
        href: "blah/blah",
        text: "402 books"
      },
      poemsLink: {
        href: "blah/blah",
        text: "More Poems"
      },
      essaysLink: {
        href: "blah/blah",
        text: "28 Essays"
      },
      poetsLink: {
        href: "blah/blah",
        text: "More Poets"
      },
      featuredPoetsLink: {
        href: "blah/blah",
        text: "3443 Poets"
      },
      PrizeLink: {
        href: "blah/blah",
        text: "11 Prizes"
      },
      poetListItems: [
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Dickerson", last: "Macdonald" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Larsen", last: "Shaw" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Mini", last: "Navarro" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Geneva", last: "Wilson" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Jami", last: "Carney" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Essie", last: "Dunlap" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Thor", last: "Macdonald" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Larsen", last: "Shaw" },
          _cellVariants: { years: "danger", schoolsMovements: "warning" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Mitzi", last: "Navarro" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Genevieve", last: "Wilson" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "John", last: "Carney" }
        },
        {
          schoolsMovements: "Objectivist",
          years: "1978 - Present",
          name: { first: "Dick", last: "Dunlap" }
        }
      ],
      bookCards: [
        {
          title: "Brown",
          text:
            "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.",
          author: "Alfred A. Knopf",
          year: "2018",
          img: {
            src: "/images/book.png"
          },
          link: {
            href: "/"
          }
        },
        {
          title: "American Sonnets for My Past and Future Assassin",
          text:
            "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.",
          author: "Terrence Hayes",
          year: "",
          img: {
            src: "/images/book.png"
          },
          link: {
            href: "/"
          }
        },
        {
          title: "Brown",
          text:
            "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.",
          author: "Alfred A. Knopf",
          year: "2018",
          img: {
            src: "/images/book.png"
          },
          link: {
            href: "/"
          }
        },
        {
          title: "American Sonnets for My Past and Future Assassin",
          text:
            "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.",
          author: "Terrence Hayes",
          year: "",
          img: {
            src: "/images/book.png"
          },
          link: {
            href: "/"
          }
        }
      ],
      teachingText:
        "Here you’ll find poetry lesson plans, essays about teaching, a glossary of poetry terms, and more. And our lesson plans, most of which are aligned with the Common Core, have been reviewed by our Educator in Residence with an eye toward developing skills of perception and imagination.",
      teachingCards: [
        {
          title: "Crafting a Poetic Sensibility",
          titleLink: "/blah",
          text:
            "An essay by our educator in residence, Madeleine Fuchs Holzer, about crafting a poetic sensibility",
          img: {
            src: "/images/poet.png"
          }
        },
        {
          title: "Poems for Kids",
          titleLink: "/blah",
          text:
            "30 selections of poems curated for young people around specific themes",
          img: {
            src: "/images/poet.png"
          }
        },
        {
          title: "Create Online Anthologies",
          titleLink: "/blah",
          text:
            "Instructions on how to create an online anthology of poems to share, right here on Poets.org",
          img: {
            src: "/images/poet.png"
          }
        },
        {
          title: "Poetry Resources for Teens",
          titleLink: "/blah",
          text:
            "Poetry resources for teens, including additional selections of poems curated especially for teens",
          img: {
            src: "/images/poet.png"
          }
        }
      ],
      calloutAction: {
        to: "/blah",
        text: "Learn More & Sign Up"
      },
      programsMoreLink: {
        to: "/blah",
        text: "8 Programs"
      },
      programs: [
        {
          title: "Poets Forum/Chancellor Events",
          img: {
            alt: "Program Image",
            id: "b8cd40b3-85e9-4a87-a5d8-984c68cddcc7"
          },
          body:
            "We are pleased to present the award-winning and esteemed poets who serve as Chancellors of the Academy of American Poets at the Dodge Poetry Festival on October 18 - 21, 2018. The weekend will include a group reading and conversations."
        },
        {
          title: "Poem-a-Day",
          img: {
            alt: "Program Image",
            id: "b8cd40b3-85e9-4a87-a5d8-984c68cddcc7"
          },
          body:
            "Poem-a-Day is the original and only daily digital poetry series featuring over 200 new, previously unpublished poems by today’s talented poets each year. On weekdays, poems are accompanied by exclusive commentary by the poets, and several featured..."
        },
        {
          title: "American Poets Prizes",
          img: {
            alt: "Program Image",
            id: "b8cd40b3-85e9-4a87-a5d8-984c68cddcc7"
          },
          body:
            "Since 1934, the Academy of American Poets has provided visibility and financial support to poets demonstrating artistic excellence. Guidelines and entry forms are provided, where applicable. All poets who receive an Academy of American Poets Prize are strongly promoted, including features in American Poets magazine, on social media, and, of course, on Poets.org."
        }
      ],
      resourceCard: {
        title: "Poetry in the Classroom Calendar",
        body:
          "Take a look at our brand-new Poetry in the Classroom Calendar, a downloadable, interactive PDF designed to inspire ideas for teaching poetry throughout each month, with links to related lesson plans, activities, and other resources.",
        link: {
          to: "/blah",
          text: "Download it Now"
        },
        imgSrc: "https://placekitten.com/277/372",
        fileLink: "https://google.com"
      }
    };
  }
};
</script>

<style lang="scss">
.styleguide {
  position: relative;
}
.styleguide-item {
  margin-bottom: $spacer * 2;
  padding-bottom: $spacer * 2;
}
.styleguide__heading {
  padding-bottom: $spacer / 2;
  margin-bottom: $spacer * 2;
  border-bottom: 1px solid $gray-600;
}
.styleguide__menu {
  position: sticky;
  top: $spacer;
  height: calc(100vh - 4rem);
}
.nav-link.active {
  font-weight: bold;
  color: $black;
}

// Special Background magics.
.trans-bg-eg {
  background-image: url(https://www.teenbookfest.org/img/book-page.jpg);
  background-size: contain;
  background-color: #eee;
  background-blend-mode: overlay;

  .card-deck--poet--extended {
    @include trans-bg--multiply(var(--green));
  }
}
</style>
