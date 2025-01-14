import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Metadata } from '../content-type-snippets/metadata';
import { type Personas } from '../taxonomies/personas';
import { type Sitemap } from '../taxonomies/sitemap_538125f';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Article
 * Id: b7aa4a53-d9b1-48cf-b7a6-ed0b182c4b89
 * Codename: article
 */
export type Article = IContentItem<{
  /**
   * Body (rich_text)
   * Required: false
   * Id: 07adeeec-91fa-4424-9bc9-7f8e397dabae
   * Codename: body
   */
  body: Elements.RichTextElement;

  /**
   * Body Copy (rich_text)
   * Required: false
   * Id: 108ed7c0-fc8c-c0ec-d0b5-5a8071408b54
   * Codename: body_copy
   *
   * Keep the article structured with concise paragraphs complemented with headlines that will help the reader navigate through the article's content.Preferred glossary terms — coffee, brewing, grinder, drip, roast, filter.
   */
  bodyCopy: Elements.RichTextElement;

  /**
   * Meta description (text)
   * Required: false
   * Id: b9dc537c-2518-e4f5-8325-ce4fce26171e
   * Codename: meta_description
   *
   * Sum up the blog for SEO purposes. Limit for the meta description is 160 characters.
   */
  metaDescription: Elements.TextElement;

  /**
   * Meta keywords (text)
   * Required: false
   * Id: 5efb2425-5987-a4a6-a2d3-b14712b56e73
   * Codename: meta_keywords
   *
   * Enter tags separated with a comma. Example: coffee, "coffee roast”, grinder
   */
  metaKeywords: Elements.TextElement;

  /**
   * Personas (taxonomy)
   * Required: false
   * Id: 0a16b642-ac3e-584d-a45a-ba354a30b2bd
   * Codename: personas
   *
   * Provide all personas for which this article is relevant.
   */
  personas: Elements.TaxonomyElement<Personas>;

  /**
   * Post date (date_time)
   * Required: false
   * Id: 4ae5f7a9-fe1f-1e8c-bfec-d321455139c4
   * Codename: post_date
   *
   * Provide a date that will appear on the live site as the date this article was posted live. This date will also influence the order of the articles.
   */
  postDate: Elements.DateTimeElement;

  /**
   * Product image (asset)
   * Required: false
   * Id: 84d1c4ca-8b76-44fe-a759-04fc92baa52a
   * Codename: product_image
   */
  productImage: Elements.AssetsElement;

  /**
   * Related articles (modular_content)
   * Required: false
   * Id: ee7c3687-b469-6c56-3ac6-c8dfdc8b58b5
   * Codename: related_articles
   *
   * Provide articles with related topics.
   */
  relatedArticles: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: a4d7a146-7e39-4001-b462-c5a0c734f3f5
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;

  /**
   * Summary (text)
   * Required: false
   * Id: 90550cbe-7bff-40a9-2947-9c81489fe562
   * Codename: summary
   *
   * Provide a short summary of the text. It should be catchy and make the visitor want to read the whole article.The summary should fit within 160 characters.
   */
  summary: Elements.TextElement;

  /**
   * Teaser image (asset)
   * Required: false
   * Id: 62eb9881-e222-6b81-91d2-fdf052726414
   * Codename: teaser_image
   *
   * Upload an image at a resolution of at least 600 × 1200 px.
   */
  teaserImage: Elements.AssetsElement;

  /**
   * Title (text)
   * Required: false
   * Id: 85d5efc6-f47e-2fde-a6f5-0950fe89ecd1
   * Codename: title
   *
   * The title should fit within 60 characters.Our voice and tone recommendations: — avoid coffee jargon.
   */
  title: Elements.TextElement;

  /**
   * URL pattern (url_slug)
   * Required: false
   * Id: f2ff5e3f-a9ca-4604-58b0-34a2ad6a7cf1
   * Codename: url_pattern
   *
   * Provide a SEO-friendly URL.
   */
  urlPattern: Elements.UrlSlugElement;
}> &
  Metadata;
