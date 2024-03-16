import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
	print(report: string): void {
		const html = /*html*/ `
            <div>
                <h1>Analysis</h1>
                <div>${report}</div>
            </div>
        `;

		fs.writeFileSync("report.html", html);
	}
}
