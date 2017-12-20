﻿// <auto-generated />
using AzureToolkit.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace AzureToolkit.Migrations
{
    [DbContext(typeof(AzureToolkitContext))]
    partial class AzureToolkitContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AzureToolkit.Models.SavedFace", b =>
                {
                    b.Property<int>("SavedFaceId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Age");

                    b.Property<int?>("FaceRectangleSavedFaceRectangleId");

                    b.Property<string>("Gender");

                    b.Property<int?>("SavedImageId");

                    b.HasKey("SavedFaceId");

                    b.HasIndex("FaceRectangleSavedFaceRectangleId");

                    b.HasIndex("SavedImageId");

                    b.ToTable("SavedFaces");
                });

            modelBuilder.Entity("AzureToolkit.Models.SavedFaceRectangle", b =>
                {
                    b.Property<int>("SavedFaceRectangleId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Height");

                    b.Property<int>("Left");

                    b.Property<int>("Top");

                    b.Property<int>("Width");

                    b.HasKey("SavedFaceRectangleId");

                    b.ToTable("SavedFaceRectangles");
                });

            modelBuilder.Entity("AzureToolkit.Models.SavedImage", b =>
                {
                    b.Property<int>("SavedImageId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("StorageUrl");

                    b.Property<string>("UserId");

                    b.HasKey("SavedImageId");

                    b.ToTable("SavedImages");
                });

            modelBuilder.Entity("AzureToolkit.Models.SavedImageTag", b =>
                {
                    b.Property<int>("SavedImageTagId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("SavedImageId");

                    b.Property<string>("Tag");

                    b.HasKey("SavedImageTagId");

                    b.HasIndex("SavedImageId");

                    b.ToTable("SavedImageTags");
                });

            modelBuilder.Entity("AzureToolkit.Models.SavedFace", b =>
                {
                    b.HasOne("AzureToolkit.Models.SavedFaceRectangle", "FaceRectangle")
                        .WithMany()
                        .HasForeignKey("FaceRectangleSavedFaceRectangleId");

                    b.HasOne("AzureToolkit.Models.SavedImage")
                        .WithMany("Faces")
                        .HasForeignKey("SavedImageId");
                });

            modelBuilder.Entity("AzureToolkit.Models.SavedImageTag", b =>
                {
                    b.HasOne("AzureToolkit.Models.SavedImage")
                        .WithMany("Tags")
                        .HasForeignKey("SavedImageId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
