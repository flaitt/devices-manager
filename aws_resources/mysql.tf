provider "aws" {
  region = "us-east-2"
}

resource "aws_db_instance" "default" {
  allocated_storage    = 10
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  name                 = "devicemanager"
  username             = "username"
  password             = "password"
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
  iam_database_authentication_enabled = false
  publicly_accessible = true
}