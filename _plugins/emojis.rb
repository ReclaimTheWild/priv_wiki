class ZeldaEmojis < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input
    end
  
    # Lookup allows access to the page/post variables through the tag context
    def lookup(context, name)
      lookup = context
      name.split(".").each { |value| lookup = lookup[value] }
      lookup
    end

    def render(context)
      input = @input.strip
      baseurl = "#{lookup(context, 'site.baseurl')}"
      output = "<img src=\"#{baseurl}/assets/images/emoji/#{input}.png\" alt=\"#{input}\" width=\"32\" height=\"32\">"
      # output = "<img src=\"assets/images/emoji/#{input}.png\" alt=\"#{input}\">"
      return output;
    end
  end
  Liquid::Template.register_tag('emoji', ZeldaEmojis)
  Liquid::Template.register_tag('em', ZeldaEmojis)