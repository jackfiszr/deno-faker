// generates fake data for many computer systems properties
import type { Faker } from "./mod.ts";

interface MimeTypeDefinition {
  [key: string]: {
    extensions: string[];
  };
}

/**
 * @namespace faker.system
 */
class System {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * Generates a file name with extension or optional type.
   *
   * @method faker.system.fileName
   * @param {string} ext
   * @param {string} type
   * @returns {string}
   */
  fileName = (_ext: string, _type: string): string => {
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
   * Generates a common file name with extension or optional type.
   *
   * @method faker.system.commonFileName
   * @param {string} ext
   * @param {string} type
   * @returns {string}
   */
  commonFileName = (ext: string, _type: string): string => {
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
   * Returns a random MIME type.
   *
   * @method faker.system.mimeType
   * @returns {string}
   */
  mimeType = (): string => {
    return this.faker.random.arrayElement(
      Object.keys(this.faker.definitions.system.mimeTypes),
    );
  };

  /**
   * Returns a commonly used file type.
   *
   * @method faker.system.commonFileType
   * @returns {string}
   */
  commonFileType = (): string => {
    const types = ["video", "audio", "image", "text", "application"];
    return this.faker.random.arrayElement(types);
  };

  /**
   * Returns a commonly used file extension based on optional type.
   *
   * @method faker.system.commonFileExt
   * @param {string} type
   * @returns {string}
   */
  commonFileExt = (_type?: string): string => {
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
   * Returns any file type available as MIME type.
   *
   * @method faker.system.fileType
   * @returns {string}
   */
  fileType = (): string => {
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
   * Returns a random file extension.
   *
   * @method faker.system.fileExt
   * @param {string} mimeType
   * @returns {string}
   */
  fileExt = (mimeType: string): string => {
    const exts: string[] = [];
    const mimes = this.faker.definitions.system
      .mimeTypes as unknown as MimeTypeDefinition;

    // Get specific extension by MIME type.
    if (typeof mimes[mimeType] === "object") {
      return this.faker.random.arrayElement(mimes[mimeType].extensions);
    }

    // Reduce MIME types to those with file extensions.
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
   * Returns a random directory path.
   *
   * @method faker.system.directoryPath
   * @returns {string}
   */
  directoryPath = (): string => {
    const paths = this.faker.definitions.system.directoryPaths;
    return this.faker.random.arrayElement(paths);
  };

  /**
   * Returns a random file path.
   *
   * @method faker.system.filePath
   * @returns {string}
   */
  filePath = (): string => {
    return this.faker.fake("{{system.directoryPath}}/{{system.fileName}}");
  };

  /**
   * Returns a semantic version (semver) string.
   *
   * @method faker.system.semver
   * @returns {string}
   */
  semver = (): string => {
    return [
      this.faker.random.number(9),
      this.faker.random.number(9),
      this.faker.random.number(9),
    ].join(".");
  };
}

export { System };
