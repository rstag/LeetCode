CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      select distinct(salary) as getNthHighestSalary
      from Employee e
      where N-1 = (select count(distinct(salary)) 
                 from Employee e2
                 where e.salary < e2.salary)
  );
END
