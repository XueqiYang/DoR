/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CreatedDateV30Rc2,
    CreatedDateV30Rc2FromJSON,
    CreatedDateV30Rc2FromJSONTyped,
    CreatedDateV30Rc2ToJSON,
    ExternalIDsV30Rc2,
    ExternalIDsV30Rc2FromJSON,
    ExternalIDsV30Rc2FromJSONTyped,
    ExternalIDsV30Rc2ToJSON,
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
    PublicationDateV30Rc2,
    PublicationDateV30Rc2FromJSON,
    PublicationDateV30Rc2FromJSONTyped,
    PublicationDateV30Rc2ToJSON,
    SourceV30Rc2,
    SourceV30Rc2FromJSON,
    SourceV30Rc2FromJSONTyped,
    SourceV30Rc2ToJSON,
    TitleV30Rc2,
    TitleV30Rc2FromJSON,
    TitleV30Rc2FromJSONTyped,
    TitleV30Rc2ToJSON,
    UrlV30Rc2,
    UrlV30Rc2FromJSON,
    UrlV30Rc2FromJSONTyped,
    UrlV30Rc2ToJSON,
    WorkTitleV30Rc2,
    WorkTitleV30Rc2FromJSON,
    WorkTitleV30Rc2FromJSONTyped,
    WorkTitleV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkSummaryV30Rc2
 */
export interface WorkSummaryV30Rc2 {
    /**
     * 
     * @type {number}
     * @memberof WorkSummaryV30Rc2
     */
    putCode?: number;
    /**
     * 
     * @type {CreatedDateV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    createdDate?: CreatedDateV30Rc2;
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {SourceV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    source?: SourceV30Rc2;
    /**
     * 
     * @type {WorkTitleV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    title?: WorkTitleV30Rc2;
    /**
     * 
     * @type {ExternalIDsV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    externalIds?: ExternalIDsV30Rc2;
    /**
     * 
     * @type {UrlV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    url?: UrlV30Rc2;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30Rc2
     */
    type?: WorkSummaryV30Rc2TypeEnum;
    /**
     * 
     * @type {PublicationDateV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    publicationDate?: PublicationDateV30Rc2;
    /**
     * 
     * @type {TitleV30Rc2}
     * @memberof WorkSummaryV30Rc2
     */
    journalTitle?: TitleV30Rc2;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30Rc2
     */
    visibility?: WorkSummaryV30Rc2VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30Rc2
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSummaryV30Rc2
     */
    displayIndex?: string;
}

/**
* @export
* @enum {string}
*/
export enum WorkSummaryV30Rc2TypeEnum {
    Annotation = 'ANNOTATION',
    ArtisticPerformance = 'ARTISTIC_PERFORMANCE',
    BookChapter = 'BOOK_CHAPTER',
    BookReview = 'BOOK_REVIEW',
    Book = 'BOOK',
    ConferenceAbstract = 'CONFERENCE_ABSTRACT',
    ConferencePaper = 'CONFERENCE_PAPER',
    ConferencePoster = 'CONFERENCE_POSTER',
    DataManagementPlan = 'DATA_MANAGEMENT_PLAN',
    DataSet = 'DATA_SET',
    DictionaryEntry = 'DICTIONARY_ENTRY',
    Disclosure = 'DISCLOSURE',
    DissertationThesis = 'DISSERTATION_THESIS',
    EditedBook = 'EDITED_BOOK',
    EncyclopediaEntry = 'ENCYCLOPEDIA_ENTRY',
    Invention = 'INVENTION',
    JournalArticle = 'JOURNAL_ARTICLE',
    JournalIssue = 'JOURNAL_ISSUE',
    LectureSpeech = 'LECTURE_SPEECH',
    License = 'LICENSE',
    MagazineArticle = 'MAGAZINE_ARTICLE',
    Manual = 'MANUAL',
    NewsletterArticle = 'NEWSLETTER_ARTICLE',
    NewspaperArticle = 'NEWSPAPER_ARTICLE',
    OnlineResource = 'ONLINE_RESOURCE',
    Other = 'OTHER',
    Patent = 'PATENT',
    PhysicalObject = 'PHYSICAL_OBJECT',
    Preprint = 'PREPRINT',
    RegisteredCopyright = 'REGISTERED_COPYRIGHT',
    Report = 'REPORT',
    ResearchTechnique = 'RESEARCH_TECHNIQUE',
    ResearchTool = 'RESEARCH_TOOL',
    Software = 'SOFTWARE',
    SpinOffCompany = 'SPIN_OFF_COMPANY',
    StandardsAndPolicy = 'STANDARDS_AND_POLICY',
    SupervisedStudentPublication = 'SUPERVISED_STUDENT_PUBLICATION',
    TechnicalStandard = 'TECHNICAL_STANDARD',
    Test = 'TEST',
    Trademark = 'TRADEMARK',
    Translation = 'TRANSLATION',
    Website = 'WEBSITE',
    WorkingPaper = 'WORKING_PAPER',
    Undefined = 'UNDEFINED'
}/**
* @export
* @enum {string}
*/
export enum WorkSummaryV30Rc2VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function WorkSummaryV30Rc2FromJSON(json: any): WorkSummaryV30Rc2 {
    return WorkSummaryV30Rc2FromJSONTyped(json, false);
}

export function WorkSummaryV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkSummaryV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc2FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc2FromJSON(json['source']),
        'title': !exists(json, 'title') ? undefined : WorkTitleV30Rc2FromJSON(json['title']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc2FromJSON(json['external-ids']),
        'url': !exists(json, 'url') ? undefined : UrlV30Rc2FromJSON(json['url']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'publicationDate': !exists(json, 'publication-date') ? undefined : PublicationDateV30Rc2FromJSON(json['publication-date']),
        'journalTitle': !exists(json, 'journal-title') ? undefined : TitleV30Rc2FromJSON(json['journal-title']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function WorkSummaryV30Rc2ToJSON(value?: WorkSummaryV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'put-code': value.putCode,
        'created-date': CreatedDateV30Rc2ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30Rc2ToJSON(value.lastModifiedDate),
        'source': SourceV30Rc2ToJSON(value.source),
        'title': WorkTitleV30Rc2ToJSON(value.title),
        'external-ids': ExternalIDsV30Rc2ToJSON(value.externalIds),
        'url': UrlV30Rc2ToJSON(value.url),
        'type': value.type,
        'publication-date': PublicationDateV30Rc2ToJSON(value.publicationDate),
        'journal-title': TitleV30Rc2ToJSON(value.journalTitle),
        'visibility': value.visibility,
        'path': value.path,
        'display-index': value.displayIndex,
    };
}

