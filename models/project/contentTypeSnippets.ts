/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Project name: Welltale Cosmetics, Inc
 * Environment: Live
 * Project Id: d4250b5b-747a-004f-06cd-bef9e9b24150
 */
export const contentTypeSnippets = {
  /**
   * Guidelines for content creators
   */
  guidelines_for_content_creators: {
    codename: 'guidelines_for_content_creators',
    id: '83639954-da29-4743-b11d-0949069d399f',
    externalId: undefined,
    name: 'Guidelines for content creators',
    elements: {},
  },

  /**
   * Metadata
   */
  metadata: {
    codename: 'metadata',
    id: 'baf884be-531f-441f-ae88-64205efdd0f6',
    externalId: undefined,
    name: 'Metadata',
    elements: {
      /**
       * Meta title (text)
       *
       * Length: 30–60 characters
       */
      metadata__meta_title: {
        codename: 'metadata__meta_title',
        id: '09398b24-61ed-512e-5b5c-affd54a098e5',
        externalId: undefined,
        name: 'Meta title',
        required: false,
        type: 'text',
      },

      /**
       * Meta description (text)
       *
       * Length: 70–150 characters
       */
      metadata__meta_description: {
        codename: 'metadata__meta_description',
        id: '2e555cc1-1eae-520c-189e-28548904f529',
        externalId: undefined,
        name: 'Meta description',
        required: false,
        type: 'text',
      },

      /**
       * og:title (text)
       *
       * Max. 60 characters
       */
      metadata__og_title: {
        codename: 'metadata__og_title',
        id: '1db86c7a-e836-3c4e-01e6-4f704ad38ba5',
        externalId: undefined,
        name: 'og:title',
        required: false,
        type: 'text',
      },

      /**
       * og:description (text)
       *
       * Max. 150 characters
       */
      metadata__og_description: {
        codename: 'metadata__og_description',
        id: '05987dc9-ebe3-7b61-b949-522eb42dbc0d',
        externalId: undefined,
        name: 'og:description',
        required: false,
        type: 'text',
      },

      /**
       * og:image (asset)
       *
       * Use images that are at least 1200 × 630 px for best display on high resolution devices. At the minimum, you should use images that are 600 × 315 px to display link page posts with larger images. Images may be up to 1 MB in size.
       */
      metadata__og_image: {
        codename: 'metadata__og_image',
        id: 'ce6cda71-9d38-1d57-3ac3-ec9b2e286edd',
        externalId: undefined,
        name: 'og:image',
        required: false,
        type: 'asset',
      },

      /**
       * twitter:site (text)
       */
      metadata__twitter_site: {
        codename: 'metadata__twitter_site',
        id: '34213fdf-0015-8f4f-e5e6-83c6842cff4a',
        externalId: undefined,
        name: 'twitter:site',
        required: false,
        type: 'text',
      },

      /**
       * twitter:creator (text)
       */
      metadata__twitter_creator: {
        codename: 'metadata__twitter_creator',
        id: '68f65095-c9b4-05d6-a473-2883c2f0c7af',
        externalId: undefined,
        name: 'twitter:creator',
        required: false,
        type: 'text',
      },

      /**
       * twitter:title (text)
       *
       * Max. 60 characters
       */
      metadata__twitter_title: {
        codename: 'metadata__twitter_title',
        id: 'b208d3dc-bd8d-b1af-5ef0-747650730ba7',
        externalId: undefined,
        name: 'twitter:title',
        required: false,
        type: 'text',
      },

      /**
       * twitter:description (text)
       *
       * A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description, or use this field to describe the general services provided by the website. Max. 150 characters.
       */
      metadata__twitter_description: {
        codename: 'metadata__twitter_description',
        id: 'b7d1dd8b-a5d8-2ad8-2f57-49881363f6f7',
        externalId: undefined,
        name: 'twitter:description',
        required: false,
        type: 'text',
      },

      /**
       * twitter:image (asset)
       *
       * Twitter's recommendation: A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card should be at least 280 × 150 px. Images may be up to 1 MB in size.Let's go for 560 × 300 px.
       */
      metadata__twitter_image: {
        codename: 'metadata__twitter_image',
        id: '63793ba4-6004-a93c-68ca-52a1f0482bca',
        externalId: undefined,
        name: 'twitter:image',
        required: false,
        type: 'asset',
      },
    },
  },
} as const;
