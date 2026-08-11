import * as sass from 'sass';
import * as path from 'node:path';
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import * as prettier from 'prettier';
import htmlmin from "html-minifier-terser";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],

		// output image widths
		widths: ["400,800,1200"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
        alt : "",
				loading: "lazy",
				decoding: "async",
        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px",
			},
			pictureAttributes: {},

      fallback: "largest",
    }
  });
  
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/img/static");

  eleventyConfig.addShortcode(
    "accordion",
    (heading, content) =>
      `<div><button class="accordion">${heading}</button>
        <div class="panel">
          <p>${content}</p>
        </div></div>`
  );

  eleventyConfig.addTemplateFormats("scss");

	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css", 

		compile: function (inputContent) {
      let result = sass.compileString(inputContent, {
        style: 'compressed',
        loadPaths: [path.dirname(inputPath), "src"],
      });

			return async (data) => {
				return result.css;
			};
		},
	});

  eleventyConfig.addTransform("htmlmin", async function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = await htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

