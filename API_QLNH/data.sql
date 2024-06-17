CREATE DATABASE QLNH
GO
USE QLNH
GO
CREATE TABLE Account
(
	UserName		NVARCHAR(50),
	Password		NVARCHAR(500),
	FullName		NVARCHAR(50)
)
CREATE TABLE Menu
(
	MenuID			INT IDENTITY PRIMARY KEY NOT NULL,
	MenuName		NVARCHAR(50),

)
GO
CREATE TABLE Menu_Item
(
	Menu_ItemID			INT IDENTITY PRIMARY KEY NOT NULL,
	Menu_ItemName		NVARCHAR(500),
	MenuName			NVARCHAR(500),
	Menu_ItemStartDate	DATE NOT NULL DEFAULT GETDATE(),
	Menu_ItemImg		NVARCHAR(500),
)
GO

INSERT INTO dbo.Account (UserName,Password,FullName) VALUES ('admin','1',N'Dương Minh Triều')
INSERT INTO dbo.Account (UserName,Password,FullName) VALUES ('mt276','1',N'Triều Minh')

SET IDENTITY_INSERT dbo.Menu ON
INSERT INTO dbo.Menu (MenuID,MenuName) VALUES (1,N'Khai vị')
INSERT INTO dbo.Menu (MenuID,MenuName) VALUES (2,N'Món Chính')
INSERT INTO dbo.Menu (MenuID,MenuName) VALUES (3,N'Tráng miệng')
SET IDENTITY_INSERT dbo.Menu OFF
SET IDENTITY_INSERT dbo.Menu_Item ON
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (1,N'Salad',N'Khai vị',GETDATE(),'menuItem1.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (2,N'Nem nướng',N'Khai vị',GETDATE(),'menuItem2.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (3,N'Các loại gỏi',N'Khai vị',GETDATE(),'menuItem3.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (4,N'Bò lúc lắc',N'Món Chính',GETDATE(),'menuItem4.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (5,N'Bò cà ri',N'Món Chính',GETDATE(),'menuItem5.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (6,N'Mực nướng muối ớt',N'Món Chính',GETDATE(),'menuItem6.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (7,N'Tôm hấp bia',N'Món Chính',GETDATE(),'menuItem7.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (8,N'Gà bó xôi',N'Món Chính',GETDATE(),'menuItem8.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (9,N'Lẩu thập cẩm',N'Món Chính',GETDATE(),'menuItem9.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (10,N'Trái cây tươi',N'Tráng miệng',GETDATE(),'menuItem10.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (11,N'Bánh flan',N'Tráng miệng',GETDATE(),'menuItem11.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuName,Menu_ItemStartDate,Menu_ItemImg) VALUES (12,N'Sữa chua',N'Tráng miệng',GETDATE(),'menuItem12.jpg')
SET IDENTITY_INSERT dbo.Menu_Item OFF
GO
select * from dbo.Menu
select * from dbo.Menu_Item