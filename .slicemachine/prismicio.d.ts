// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Service documents */
interface CategoryDocumentData {
    /**
     * Title field in *Service*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Image field in *Service*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: category.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *Service*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Service document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Header Slider field in *Home*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home.header_slider[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    header_slider: prismicT.GroupField<Simplify<HomeDocumentDataHeaderSliderItem>>;
    /**
     * Intro field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.intro
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    intro: prismicT.RichTextField;
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Item in Home → Header Slider
 *
 */
export interface HomeDocumentDataHeaderSliderItem {
    /**
     * Image field in *Home → Header Slider*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.header_slider[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = TextSectionSlice | SectionSlice | LogoSliderSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Menu field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.menu[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    menu: prismicT.GroupField<Simplify<NavigationDocumentDataMenuItem>>;
    /**
     * Footer field in *Navigation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.footer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    footer: prismicT.RichTextField;
}
/**
 * Item in Navigation → Menu
 *
 */
export interface NavigationDocumentDataMenuItem {
    /**
     * Link field in *Navigation → Menu*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.menu[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Label field in *Navigation → Menu*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.menu[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for News Item documents */
interface NewsItemDocumentData {
    /**
     * Title field in *News Item*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Date field in *News Item*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * Image field in *News Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Content field in *News Item*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: news_item.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * News Item document from Prismic
 *
 * - **API ID**: `news_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsItemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsItemDocumentData>, "news_item", Lang>;
/** Content for News documents */
interface NewsDocumentData {
    /**
     * Title field in *News*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: news.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Intro field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.intro
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    intro: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = PeopleSlice | TextSectionSlice | LogoSliderSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Partner documents */
interface PartnerDocumentData {
    /**
     * Title field in *Partner*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: partner.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Partner document from Prismic
 *
 * - **API ID**: `partner`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PartnerDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PartnerDocumentData>, "partner", Lang>;
/** Content for Portfolio documents */
interface PortfolioDocumentData {
    /**
     * Title field in *Portfolio*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: portfolio.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Portfolio document from Prismic
 *
 * - **API ID**: `portfolio`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PortfolioDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PortfolioDocumentData>, "portfolio", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"full">;
    /**
     * Services field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.categories[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    categories: prismicT.GroupField<Simplify<ProjectDocumentDataCategoriesItem>>;
    /**
     * Country Codes field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.country_codes[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    country_codes: prismicT.GroupField<Simplify<ProjectDocumentDataCountryCodesItem>>;
    /**
     * Color field in *Project*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: project.color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    color: prismicT.SelectField<"pink" | "orange" | "green" | "purple" | "brown" | "red" | "blue">;
    /**
     * Gradient field in *Project*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: project.gradient
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    gradient: prismicT.BooleanField;
    /**
     * Partners field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.partners[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    partners: prismicT.GroupField<Simplify<ProjectDocumentDataPartnersItem>>;
    /**
     * Slice Zone field in *Project*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: project.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ProjectDocumentDataSlicesSlice>;
}
/**
 * Item in Project → Services
 *
 */
export interface ProjectDocumentDataCategoriesItem {
    /**
     * Service field in *Project → Services*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: project.categories[].category
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
}
/**
 * Item in Project → Country Codes
 *
 */
export interface ProjectDocumentDataCountryCodesItem {
    /**
     * Country Code field in *Project → Country Codes*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.country_codes[].country_code
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    country_code: prismicT.KeyTextField;
}
/**
 * Item in Project → Partners
 *
 */
export interface ProjectDocumentDataPartnersItem {
    /**
     * Partner field in *Project → Partners*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: project.partners[].partner
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    partner: prismicT.RelationField<"partner">;
}
/**
 * Slice for *Project → Slice Zone*
 *
 */
type ProjectDocumentDataSlicesSlice = TextSectionSlice;
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Services documents */
interface ServicesDocumentData {
    /**
     * Title field in *Services*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: services.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Services field in *Services*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: services.services[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    services: prismicT.GroupField<Simplify<ServicesDocumentDataServicesItem>>;
}
/**
 * Item in Services → Services
 *
 */
export interface ServicesDocumentDataServicesItem {
    /**
     * Service field in *Services → Services*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: services.services[].category
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
}
/**
 * Services document from Prismic
 *
 * - **API ID**: `services`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ServicesDocumentData>, "services", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.site_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    site_title: prismicT.KeyTextField;
    /**
     * Site Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.site_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    site_description: prismicT.RichTextField;
    /**
     * Image field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = CategoryDocument | HomeDocument | NavigationDocument | NewsItemDocument | NewsDocument | PageDocument | PartnerDocument | PortfolioDocument | ProjectDocument | ServicesDocument | SettingsDocument;
/**
 * Primary content in LogoSlider → Primary
 *
 */
interface LogoSliderSliceDefaultPrimary {
    /**
     * Title field in *LogoSlider → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: logo_slider.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in LogoSlider → Items
 *
 */
export interface LogoSliderSliceDefaultItem {
    /**
     * Logo field in *LogoSlider → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_slider.items[].logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Default variation for LogoSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `LogoSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogoSliderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<LogoSliderSliceDefaultPrimary>, Simplify<LogoSliderSliceDefaultItem>>;
/**
 * Slice variation for *LogoSlider*
 *
 */
type LogoSliderSliceVariation = LogoSliderSliceDefault;
/**
 * LogoSlider Shared Slice
 *
 * - **API ID**: `logo_slider`
 * - **Description**: `LogoSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogoSliderSlice = prismicT.SharedSlice<"logo_slider", LogoSliderSliceVariation>;
/**
 * Primary content in People → Primary
 *
 */
interface PeopleSliceDefaultPrimary {
    /**
     * Title field in *People → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: people.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in People → Items
 *
 */
export interface PeopleSliceDefaultItem {
    /**
     * Image field in *People → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: people.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Role field in *People → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: people.items[].role
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    role: prismicT.KeyTextField;
    /**
     * Name field in *People → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: people.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Bio field in *People → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: people.items[].bio
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
}
/**
 * Default variation for People Slice
 *
 * - **API ID**: `default`
 * - **Description**: `People`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PeopleSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PeopleSliceDefaultPrimary>, Simplify<PeopleSliceDefaultItem>>;
/**
 * Slice variation for *People*
 *
 */
type PeopleSliceVariation = PeopleSliceDefault;
/**
 * People Shared Slice
 *
 * - **API ID**: `people`
 * - **Description**: `People`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PeopleSlice = prismicT.SharedSlice<"people", PeopleSliceVariation>;
/**
 * Primary content in Section → Primary
 *
 */
interface SectionSliceDefaultPrimary {
    /**
     * Page field in *Section → Primary*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: section.primary.page
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    page: prismicT.RelationField<"page" | "portfolio" | "news" | "services">;
}
/**
 * Default variation for Section Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Section`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SectionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Section*
 *
 */
type SectionSliceVariation = SectionSliceDefault;
/**
 * Section Shared Slice
 *
 * - **API ID**: `section`
 * - **Description**: `Section`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSlice = prismicT.SharedSlice<"section", SectionSliceVariation>;
/**
 * Primary content in TextSection → Primary
 *
 */
interface TextSectionSliceDefaultPrimary {
    /**
     * Title field in *TextSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *TextSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: text_section.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for TextSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSectionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextSection*
 *
 */
type TextSectionSliceVariation = TextSectionSliceDefault;
/**
 * TextSection Shared Slice
 *
 * - **API ID**: `text_section`
 * - **Description**: `TextSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSectionSlice = prismicT.SharedSlice<"text_section", TextSectionSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { CategoryDocumentData, CategoryDocument, HomeDocumentData, HomeDocumentDataHeaderSliderItem, HomeDocumentDataSlicesSlice, HomeDocument, NavigationDocumentData, NavigationDocumentDataMenuItem, NavigationDocument, NewsItemDocumentData, NewsItemDocument, NewsDocumentData, NewsDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, PartnerDocumentData, PartnerDocument, PortfolioDocumentData, PortfolioDocument, ProjectDocumentData, ProjectDocumentDataCategoriesItem, ProjectDocumentDataCountryCodesItem, ProjectDocumentDataPartnersItem, ProjectDocumentDataSlicesSlice, ProjectDocument, ServicesDocumentData, ServicesDocumentDataServicesItem, ServicesDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, LogoSliderSliceDefaultPrimary, LogoSliderSliceDefaultItem, LogoSliderSliceDefault, LogoSliderSliceVariation, LogoSliderSlice, PeopleSliceDefaultPrimary, PeopleSliceDefaultItem, PeopleSliceDefault, PeopleSliceVariation, PeopleSlice, SectionSliceDefaultPrimary, SectionSliceDefault, SectionSliceVariation, SectionSlice, TextSectionSliceDefaultPrimary, TextSectionSliceDefault, TextSectionSliceVariation, TextSectionSlice };
    }
}
