// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Category documents */
interface CategoryDocumentData {
    /**
     * Title field in *Category*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Category document from Prismic
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
type HomeDocumentDataSlicesSlice = TextSectionSlice;
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
type PageDocumentDataSlicesSlice = TextSectionSlice | PeopleSlice;
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
     * Categories field in *Project*
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
 * Item in Project → Categories
 *
 */
export interface ProjectDocumentDataCategoriesItem {
    /**
     * Category field in *Project → Categories*
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
export type AllDocumentTypes = CategoryDocument | HomeDocument | NavigationDocument | NewsItemDocument | PageDocument | ProjectDocument | SettingsDocument;
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
        export type { CategoryDocumentData, CategoryDocument, HomeDocumentData, HomeDocumentDataHeaderSliderItem, HomeDocumentDataSlicesSlice, HomeDocument, NavigationDocumentData, NavigationDocumentDataMenuItem, NavigationDocument, NewsItemDocumentData, NewsItemDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, ProjectDocumentData, ProjectDocumentDataCategoriesItem, ProjectDocumentDataCountryCodesItem, ProjectDocumentDataSlicesSlice, ProjectDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, PeopleSliceDefaultPrimary, PeopleSliceDefaultItem, PeopleSliceDefault, PeopleSliceVariation, PeopleSlice, TextSectionSliceDefaultPrimary, TextSectionSliceDefault, TextSectionSliceVariation, TextSectionSlice };
    }
}
