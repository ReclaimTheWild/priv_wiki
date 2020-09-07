class ZeldaEmojis < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input
    end
  
    def render(context)
      input = @input
      output = "<img src=\"/assets/images/emoji/#{input}.png\" alt=\"#{input}\">"
      return output;
    end
  end
  Liquid::Template.register_tag('emoji', ZeldaEmojis)
  Liquid::Template.register_tag('em', ZeldaEmojis)