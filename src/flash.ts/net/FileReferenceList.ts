/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations undxr the License.
 */
// Class: FileReferenceList
module Shumway.AVM2.AS.flash.net {
  import notImplemented = Shumway.Debug.notImplemented;
  export class FileReferenceList extends flash.events.EventDispatcher {
    static initializer: any = null;
    constructor () {
      false && super(undefined);
      notImplemented("Dummy Constructor: public flash.net.FileReferenceList");
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    // Instance AS -> JS Bindings
    get fileList(): any [] {
      notImplemented("public flash.net.FileReferenceList::get fileList"); return;
    }
    browse(typeFilter: any [] = null): boolean {
      typeFilter = typeFilter;
      notImplemented("public flash.net.FileReferenceList::browse"); return;
    }
  }
}