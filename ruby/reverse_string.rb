def reverse_string(str)
  # type your code in here
  result = []
  split = str.split("")
  counter = split.count
  while counter >= 0
    result << split[counter]
    counter -= 1
  end
  result.join("")
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
  puts "Expecting: 'tset'"
  puts "=>", reverse_string('test')
end

# Please add your pseudocode to this file
# And a written explanation of your solution