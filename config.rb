###
# General
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Pages
###

# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Activate directory indexes
activate :directory_indexes

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }
