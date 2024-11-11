// generates fake data for many computer systems properties

/**
 * @namespace faker.system
 */
class System {
  faker: any;
  constructor(faker: any) {
    this.faker = faker;
  }
  /**
   * generates a file name with extension or optional type
   *
   * @method faker.system.fileName
   * @param {string} ext
   * @param {string} type
   */
  fileName = (ext: string, type: string) => {
    let str = this.faker.fake("{{random.words}}.{{system.fileExt}}");
    str = str.replace(/ /g, "_");
    str = str.replace(/\,/g, "_");
    str = str.replace(/\-/g, "_");
    str = str.replace(/\\/g, "_");
    str = str.replace(/\//g, "_");
    str = str.toLowerCase();
    return str;
  };

  /**
   * commonFileName
   *
   * @method faker.system.commonFileName
   * @param {string} ext
   * @param {string} type
   */
  commonFileName = (ext: string, type: string) => {
    let str = this.faker.random.words() + "." +
      (ext || this.faker.system.commonFileExt());
    str = str.replace(/ /g, "_");
    str = str.replace(/\,/g, "_");
    str = str.replace(/\-/g, "_");
    str = str.replace(/\\/g, "_");
    str = str.replace(/\//g, "_");
    str = str.toLowerCase();
    return str;
  };

  /**
   * mimeType
   *
   * @method faker.system.mimeType
   */
  mimeType = () => {
    return this.faker.random.arrayElement(
      Object.keys(this.faker.definitions.system.mimeTypes),
    );
  };

  /**
   * returns a commonly used file type
   *
   * @method faker.system.commonFileType
   */
  commonFileType = () => {
    const types = ["video", "audio", "image", "text", "application"];
    return this.faker.random.arrayElement(types);
  };

  /**
   * returns a commonly used file extension based on optional type
   *
   * @method faker.system.commonFileExt
   * @param {string} type
   */
  commonFileExt = (type: string) => {
    const types = [
      "application/pdf",
      "audio/mpeg",
      "audio/wav",
      "image/png",
      "image/jpeg",
      "image/gif",
      "video/mp4",
      "video/mpeg",
      "text/html",
    ];
    return this.faker.system.fileExt(this.faker.random.arrayElement(types));
  };

  /**
   * returns any file type available as mime-type
   *
   * @method faker.system.fileType
   */
  fileType = () => {
    const types: string[] = [];
    const mimes = this.faker.definitions.system.mimeTypes;
    Object.keys(mimes).forEach(function (m) {
      const parts = m.split("/");
      if (types.indexOf(parts[0]) === -1) {
        types.push(parts[0]);
      }
    });
    return this.faker.random.arrayElement(types);
  };

  /**
   * fileExt
   *
   * @method faker.system.fileExt
   * @param {string} mimeType
   */
  fileExt = (mimeType: string) => {
    const exts: string[] = [];
    const mimes = this.faker.definitions.system.mimeTypes;

    // get specific ext by mime-type
    if (typeof mimes[mimeType] === "object") {
      return this.faker.random.arrayElement(mimes[mimeType].extensions);
    }

    // reduce mime-types to those with file-extensions
    Object.keys(mimes).forEach(function (m) {
      if (mimes[m].extensions instanceof Array) {
        mimes[m].extensions.forEach(function (ext: string) {
          exts.push(ext);
        });
      }
    });
    return this.faker.random.arrayElement(exts);
  };

  /**
   * returns directory path
   *
   * @method faker.system.directoryPath
   */
  directoryPath = () => {
    const paths = this.faker.definitions.system.directoryPaths;
    return this.faker.random.arrayElement(paths);
  };

  /**
   * returns file path
   *
   * @method faker.system.filePath
   */
  filePath = () => {
    return this.faker.fake("{{system.directoryPath}}/{{system.fileName}}");
  };

  /**
   * semver
   *
   * @method faker.system.semver
   */
  semver = () => {
    return [
      this.faker.random.number(9),
      this.faker.random.number(9),
      this.faker.random.number(9),
    ].join(".");
  };
}

export { System };
