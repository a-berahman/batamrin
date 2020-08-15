//Find all configuration in the platform
package config

import "text/template"

var TPL *template.Template

func init() {
	TPL = template.Must(template.ParseGlob("templates/*.gohtml"))
}
