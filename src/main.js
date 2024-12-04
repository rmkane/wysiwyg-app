import tinymce from 'tinymce';

// Styles and assets
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default/icons';
import './style.css';

// Plugins
import 'tinymce/plugins/accordion';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

import { downloadContent } from './utils';

// Detect if the user prefers dark mode
const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Makes the toolbar config easier to read
const formatToolbar = (sections) =>
  sections.map((arr) => arr.join(' ')).join(' | ');

// Based on the example: "Full featured demo: Non-Premium Plugins only"
// https://www.tiny.cloud/docs/tinymce/latest/full-featured-open-source-demo/
tinymce.init({
  base_url: '/tinymce',
  selector: '#editor',
  height: '100vh',
  menubar: 'file edit view insert format tools table help',
  plugins: [
    'accordion',
    'advlist',
    'autolink',
    'autosave',
    'charmap',
    'code',
    'codesample',
    'directionality',
    'emoticons',
    'fullscreen',
    'help',
    'image',
    'importcss',
    'insertdatetime',
    'link',
    'lists',
    'media',
    'nonbreaking',
    'pagebreak',
    'preview',
    'quickbars',
    'save',
    'searchreplace',
    'table',
    'visualblocks',
    'visualchars',
    'wordcount',
  ],
  toolbar: formatToolbar([
    ['undo', 'redo'],
    ['accordion', 'accordionremove'],
    ['blocks', 'fontfamily', 'fontsize'],
    ['bold', 'italic', 'underline', 'strikethrough'],
    ['align', 'numlist', 'bullist'],
    ['link', 'image'],
    ['table', 'media'],
    ['lineheight', 'outdent', 'indent'],
    ['forecolor', 'backcolor', 'removeformat'],
    ['charmap emoticons'],
    ['code', 'fullscreen', 'preview'],
    ['save', 'print'],
    ['pagebreak', 'anchor', 'codesample'],
    ['ltr', 'rtl'],
  ]),
  skin: useDarkMode ? 'oxide-dark' : 'oxide',
  content_css: useDarkMode ? 'dark' : 'default',
  content_style:
    'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  toolbar_mode: 'sliding',
  contextmenu: 'link image table',
  quickbars_selection_toolbar:
    'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  save_enablewhendirty: true,
  save_onsavecallback: () => {
    downloadContent(tinymce.get('editor').getContent());
  },
  // Additional config
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' },
  ],
  image_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' },
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' },
  ],
});
