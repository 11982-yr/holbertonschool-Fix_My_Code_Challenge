###
#
# Sort integer arguments in ascending order
#
###

result = []
ARGV.each do |arg|
    # Skip non-integer arguments
    next if arg !~ /^-?[0-9]+$/

    # Convert argument to integer
    i_arg = arg.to_i
    
    # Insert the integer into the correct position in the result array
    is_inserted = false
    i = 0
    l = result.size
    while !is_inserted && i < l do
        if result[i] < i_arg
            i += 1
        else
            # Insert at the correct index
            result.insert(i, i_arg)
            is_inserted = true
            break
        end
    end

    # Append to the end if not inserted
    result << i_arg if !is_inserted
end

# Output the sorted result
puts result
