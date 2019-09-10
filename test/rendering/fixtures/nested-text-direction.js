/** @jsx h */

import h from '../../helpers/h'

export const props = {}

export const value = (
  <value>
    <document>
      <quote>
        <paragraph>مرحبا بالعالم</paragraph>
        <paragraph>שלום עולם</paragraph>
      </quote>
    </document>
  </value>
)

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
  <div style="position:relative">
  <div dir="rtl" style="position:relative">
    <span>
      <span data-slate-leaf="true">
        <span data-slate-content="true">مرحبا بالعالم</span>
      </span>
    </span>
  </div>
  <div dir="rtl" style="position:relative">
    <span>
      <span data-slate-leaf="true">
        <span data-slate-content="true">שלום עולם</span>
      </span>
    </span>
  </div>
</div>
`.trim()
