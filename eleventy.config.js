import * as sass from 'sass';
import * as path from 'node:path';
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import * as prettier from 'prettier';
import htmlmin from "html-minifier-terser";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],

		// output image widths
		widths: ["auto"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
        alt : "",
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {},

      fallback: "largest",
    }
  });
  //eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addShortcode(
    "accordion",
    (heading, content) =>
      `<div><button class="accordion">${heading}</button>
        <div class="panel">
          <p>${content}</p>
        </div></div>`
  );

  eleventyConfig.addTemplateFormats("scss");

	// Creates the extension for use
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css", 

		compile: function (inputContent) {

      let result = sass.compileString(inputContent, {
        style: 'compressed',
      });

			return async (data) => {
				return result.css;
			};
		},
	});

  eleventyConfig.addTransform("prettier", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {

        let prettified = prettier.format(content, {
            bracketSameLine: true,
            printWidth: 160,
            parser: "html",
            tabWidth: 2
        });
        return prettified;
    }

    // If not an HTML output, return content as-is
    return content;
  });

  eleventyConfig.addTransform("htmlmin", function (content) {
		// String conversion to handle `permalink: false`
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

