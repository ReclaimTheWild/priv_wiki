{%- comment -%}
  Use {% include contributors/page.md slug=STRING %}
  for a Markdown section summary of tags with the specified slug,
  including a list of links to pages and posts that have such a tag.

  When the slug parameter is omitted, the name of the including file is used.
{%- endcomment -%}

{%- assign current_page_slug = page.url | split: "/" | last -%}

{%- assign page_slug = include.slug | default: current_page_slug -%}

{% include contributors/tagged_pages.html slug=page_slug %}

{% assign contributor_data = site.data.contributors | where: 'id', page_slug | first %}

## {{ contributor_data.name }}

{% assign contributor_url = page_slug | prepend: "/contributor/" -%}
{%- if contributor_url == page.url -%}
{{ page.description }}
{%- endif %}

Articles: {{ tagged_pages.size }}

{%- for tagged_page in tagged_pages %}

- <a href="{{ site.url }}{{ site.baseurl }}{{ tagged_page.url }}">{{ tagged_page.title }}</a>{% if tagged_page.summary %} - {{ tagged_page.summary }}{% endif %} ({%- for contributor_3 in tagged_page.contributors %}\#{% include contributors/contributor_link.html contributor=contributor_3 %}{%- endfor %})
{% endfor %}

{%- assign current_page_slug = nil -%}
{%- assign page_slug = nil -%}
{%- assign contributor_url = nil -%}
{%- assign tagged_page = nil -%}
{%- assign tagged_pages = nil -%}